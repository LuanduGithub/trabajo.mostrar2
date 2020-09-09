import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfirmarPedidoService } from '../core/confirmar/confirmar-pedido.service';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-pedido-fallido',
  templateUrl: './pedido-fallido.component.html',
  styleUrls: ['./pedido-fallido.component.scss']
})
export class PedidoFallidoComponent implements OnInit {
  config: any;
  pedido: string;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pedido = sessionStorage.getItem('pedidoId');
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
  }


  gotoMenu() {
    this.router.navigate(['detalleMenuDelivery']);
  }



}
