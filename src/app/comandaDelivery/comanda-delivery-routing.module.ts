import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComandaDeliveryComponent } from './comanda-delivery.component';


const routes: Routes = [
  {
    path: '',
    component: ComandaDeliveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComandaDeliveryComponentRoutingModule { }
