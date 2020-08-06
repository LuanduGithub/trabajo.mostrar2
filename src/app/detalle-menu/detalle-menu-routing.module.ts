import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMenuComponent } from './detalle-menu.component';


const routes: Routes = [
  {
    path: '',
    component: DetalleMenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMenuComponentRoutingModule { }
