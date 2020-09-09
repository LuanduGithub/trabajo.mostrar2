import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CobrarService } from './services/cobrar.service';

@Component({
  selector: 'app-pedido-confirmado',
  templateUrl: './pedido-confirmado.component.html',
  styleUrls: ['./pedido-confirmado.component.scss']
})
export class PedidoConfirmadoComponent implements OnInit {
  transaccion: string;
  pedido: string;
  config: any;
  spinner = false;
  constructor(
    private router: Router,
    private cobrarService: CobrarService
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.pedido = sessionStorage.getItem('pedidoId');
    this.transaccion = localStorage.getItem('collectorId');
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);

    if (this.pedido || this.transaccion) {
      const obj = {
        pedidoId: parseInt(this.pedido, 10),
        collector_id: parseInt(this.transaccion, 10),
      };
      this.cobrarService.getCobrar(obj).subscribe(resp => {
        if (!resp.success) {
          this.router.navigate(['pagoFallido']);
        }
        this.spinner = false;
      });
    } else {
      this.router.navigate(['pagoFallido']);
    }

  }


  gotoMenu() {
    this.router.navigate(['detalleMenuDelivery']);
  }



}
