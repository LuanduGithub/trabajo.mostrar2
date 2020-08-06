import { NgModule } from '@angular/core';
import { ComandaDeliveryComponent } from './comanda-delivery.component';
import { ComandaDeliveryComponentRoutingModule } from './comanda-delivery-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MainPipe } from '../core/filterPipe/filter.pipe.module';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ComandaDeliveryComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainPipe,
    ComandaDeliveryComponentRoutingModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [ComandaDeliveryComponent],
  providers: [],
  bootstrap: [ComandaDeliveryComponent]
})
export class ComandaDeliveryModule { }

