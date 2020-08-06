import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMenuItemsComponent } from './detalle-menu-items.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleMenuItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMenuItemsComponentRoutingModule { }
