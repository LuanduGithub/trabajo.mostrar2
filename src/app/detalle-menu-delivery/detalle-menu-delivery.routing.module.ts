import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMenuDeliveryComponent } from './detalle-menu-delivery.component';


const routes: Routes = [
  {
    path: '',
    component: DetalleMenuDeliveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMenuDeliveryComponentRoutingModule { }
