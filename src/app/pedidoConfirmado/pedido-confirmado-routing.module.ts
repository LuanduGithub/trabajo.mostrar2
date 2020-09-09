import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoConfirmadoComponent } from './pedido-confirmado.component';


const routes: Routes = [
  {
    path: '',
    component: PedidoConfirmadoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoConfirmadoComponentRoutingModule { }
