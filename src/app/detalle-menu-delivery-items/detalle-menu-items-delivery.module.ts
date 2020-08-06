import { NgModule } from '@angular/core';

import { DetalleMenuDeliveryItemsComponent } from './detalle-menu-items-delivery.component';
import { DetalleMenuDeliveryItemsComponentRoutingModule } from './detalle-menu-items-delivery.routing.module';
import { ComponentsModule } from '../components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MainPipe } from '../core/filterPipe/filter.pipe.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    DetalleMenuDeliveryItemsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainPipe,
    CommonModule,
    DetalleMenuDeliveryItemsComponentRoutingModule,
    ComponentsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [DetalleMenuDeliveryItemsComponent],
  providers: [],
  bootstrap: [DetalleMenuDeliveryItemsComponent]
})
export class DetalleMenuDeliveryItemsModule { }

