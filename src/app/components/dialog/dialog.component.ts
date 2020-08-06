import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/services/home.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmarPedidoService } from './../../core/confirmar/confirmar-pedido.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  selectedValue: string;
  cantModel: string;
  confirmForm: FormGroup;
  cantFormControl: FormControl;
  config: any;
  spinner = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private confirmarPedidoService: ConfirmarPedidoService
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);

    this.confirmForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      observacion: ['']
    });


  }
  addItemComanda(cant) {
    const obj = [{
      item: this.data.obj,
      cant
    }];
    let comanda = [] = obj;
    if (this.data.agregarPromo) {
      const comandaStorage = localStorage.getItem('comandaDelivery');
      if (comandaStorage) {
        comanda = comanda.concat(JSON.parse(comandaStorage));
      }
      localStorage.setItem('comandaDelivery', JSON.stringify(comanda));
    }
    if (this.data.agregarDelivery) {
      const comandaStorage = localStorage.getItem('comandaDelivery');
      if (comandaStorage) {
        comanda = comanda.concat(JSON.parse(comandaStorage));
      }
      localStorage.setItem('comandaDelivery', JSON.stringify(comanda));
    }
    if (this.data.agregar) {
      const comandaStorage = localStorage.getItem('comanda');
      if (comandaStorage) {
        comanda = comanda.concat(JSON.parse(comandaStorage));
      }
      localStorage.setItem('comanda', JSON.stringify(comanda));
    }

  }

  submitconfirmForm() {
    this.spinner = true;
    let comanda;
    if (this.data.agregarDelivery) {
      comanda = localStorage.getItem('comandaDelivery');
      comanda = JSON.parse(comanda);
    }
    if (this.data.agregar) {
      comanda = localStorage.getItem('comanda');
      comanda = JSON.parse(comanda);
    }

    const local = localStorage.getItem('localDelivery');
    const localId = JSON.parse(local);

    const obj = {
      localId: localId.id,
      nombre: this.confirmForm.value.nombre,
      telefono: this.confirmForm.value.telefono,
      direccion: this.confirmForm.value.direccion,
      observacion: this.confirmForm.value.observacion || '',
      detalles: [
        comanda
      ]
    };
    this.confirmarPedidoService.postConfirmar(obj).subscribe(() => {
      this.spinner = false;
      this.dialogRef.close(true);
    });
  }


}
