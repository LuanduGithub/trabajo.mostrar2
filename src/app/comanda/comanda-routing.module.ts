import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComandaComponent } from './comanda.component';


const routes: Routes = [
  {
    path: '',
    component: ComandaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComandaComponentRoutingModule { }
