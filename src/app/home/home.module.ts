import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../components/components.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeComponentRoutingModule,
    ComponentsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,

  ],
  exports: [HomeComponent],
  providers: [

  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }

