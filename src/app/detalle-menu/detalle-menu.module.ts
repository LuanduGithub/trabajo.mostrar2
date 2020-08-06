import { NgModule } from '@angular/core';

import { DetalleMenuComponent } from './detalle-menu.component';
import { DetalleMenuComponentRoutingModule } from './detalle-menu-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainPipe } from './../core/filterPipe/filter.pipe.module';
import { CommonModule } from '@angular/common';

import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    DetalleMenuComponent,
  ],
  imports: [
    MainPipe,
    CommonModule,
    FormsModule,
    DetalleMenuComponentRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    SwiperModule
  ],
  exports: [DetalleMenuComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [DetalleMenuComponent]
})
export class DetalleMenuModule { }

