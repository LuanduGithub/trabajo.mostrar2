import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoFallidoComponent } from './pedido-fallido.component';


const routes: Routes = [
  {
    path: '',
    component: PedidoFallidoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoFallidoComponentRoutingModule { }
