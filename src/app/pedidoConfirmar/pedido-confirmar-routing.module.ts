import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoConfirmarComponent } from './pedido-confirmar.component';


const routes: Routes = [
  {
    path: '',
    component: PedidoConfirmarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoConfirmarComponentRoutingModule { }
