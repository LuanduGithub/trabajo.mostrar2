import { NgModule } from '@angular/core';
import { PedidoFallidoComponent } from './pedido-fallido.component';
import { PedidoFallidoComponentRoutingModule } from './pedido-fallido-routing.module';
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

import { MatRadioModule } from '@angular/material/radio';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PedidoFallidoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainPipe,
    ReactiveFormsModule,
    PedidoFallidoComponentRoutingModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  exports: [PedidoFallidoComponent],
  providers: [],
  bootstrap: [PedidoFallidoComponent]
})
export class PedidoFallidoModule { }

