import { NgModule } from '@angular/core';
import { ComandaComponent } from './comanda.component';
import { ComandaComponentRoutingModule } from './comanda-routing.module';
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
    ComandaComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MainPipe,
    ComandaComponentRoutingModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [ComandaComponent],
  providers: [],
  bootstrap: [ComandaComponent]
})
export class ComandaModule { }

