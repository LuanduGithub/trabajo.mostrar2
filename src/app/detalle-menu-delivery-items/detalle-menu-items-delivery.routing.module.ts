import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMenuDeliveryItemsComponent } from './detalle-menu-items-delivery.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleMenuDeliveryItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMenuDeliveryItemsComponentRoutingModule { }
