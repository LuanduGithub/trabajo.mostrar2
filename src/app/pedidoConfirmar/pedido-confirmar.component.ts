import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfirmarPedidoService } from '../core/confirmar/confirmar-pedido.service';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pedido-confirmar',
  templateUrl: './pedido-confirmar.component.html',
  styleUrls: ['./pedido-confirmar.component.scss']
})
export class PedidoConfirmarComponent implements OnInit {
  config: any;
  comandas: any[];
  selectedValue: any;
  disableRemoveBtn = false;
  total: number;
  envioVal = 0;
  confirmForm: FormGroup;
  spinner = false;
  constructor(
    private router: Router,
    private confirmarPedidoService: ConfirmarPedidoService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
    this.getComandaAndSum();

    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      this.confirmForm = this.formBuilder.group({
        nombre: [user.nombre, Validators.required],
        telefono: [user.telefono, Validators.required],
        direccion: [user.domicilio, Validators.required],
        observacion: [''],
        tipoDelivery: ['1'],
        formaPago: ['1']
      });
      this.spinner = false;
    } else {
      this.confirmForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required],
        observacion: [''],
        tipoDelivery: ['1'],
        formaPago: ['1']
      });
      this.spinner = false;
    }
  }

  getComandaAndSum() {
    const comanda = localStorage.getItem('pedidoConfirmado');
    const comandaObj = JSON.parse(comanda);
    if (comandaObj) {
      this.comandas = comandaObj.map(com => {
        return {
          id: com.item.id,
          cant: com.cant,
          ingredientes: com.item.ingredientes,
          nombre: com.item.nombre,
          precios: (com.item.precio * com.cant) + this.envioVal
        };
      });
    }


  }


  submitconfirmForm() {
    const comandaDelivery = localStorage.getItem('comandaDelivery');
    this.spinner = true;

    const local = localStorage.getItem('localDelivery');
    const localId = JSON.parse(local);

    const comanda = JSON.parse(comandaDelivery).map(coman => {
      return {
        productoId: coman.item.id,
        cantidad: coman.cant.toString(),
        observacion: coman.adicionales,
        precioUnitario: coman.item.precio,
        subtotal: coman.item.precio * coman.cant
      };
    });


    const userData = {
      nombre: this.confirmForm.value.nombre,
      telefono: this.confirmForm.value.telefono,
      domicilio: this.confirmForm.value.direccion,
    };

    localStorage.setItem('userData', JSON.stringify(userData));


    const obj = {
      localId: localId.id || this.config.idNumero,
      nombre: this.confirmForm.value.nombre,
      telefono: this.confirmForm.value.telefono,
      domicilio: this.confirmForm.value.direccion,
      observacion: this.confirmForm.value.observacion || '',
      tipo: this.confirmForm.value.tipoDelivery === '1' ? true : false,
      formaPagoId: this.confirmForm.value.formaPago,
      detalles: comanda
    };

    this.confirmarPedidoService.postConfirmar(obj).subscribe(resp => {
      if (resp.urlPago !== '') {
        sessionStorage.setItem('pedidoId', resp.msg.toString());
        window.location.href = resp.urlPago;
      } else {
        this.openSnackBar();
        this.gotoMenu();
      }
      this.spinner = false;
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      // duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }



  gotoMenu() {
    this.router.navigate(['detalleMenuDelivery']);
  }



}
