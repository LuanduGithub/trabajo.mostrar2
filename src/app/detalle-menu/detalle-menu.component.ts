import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DetalleMenuService } from './services/detalle-menu.service';
import { Categorias } from './model/menuFull';
import { MenuoLogo } from './../../assets/logo';
import { DataShare } from '../core/dataShareService';
import { HomeService } from './../home/services/home.service';
import { listAnimation, actionAnimation } from './../core/animations';
import { MatAccordion } from '@angular/material/expansion';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-detalle-menu',
  templateUrl: './detalle-menu.component.html',
  styleUrls: ['./detalle-menu.component.scss'],
  animations: [
    listAnimation,
    actionAnimation
  ],
})
export class DetalleMenuComponent implements OnInit {
  categorias: Categorias[];
  spinner = false;
  menuoLogo: string;
  searchModel: string;
  config: any;
  public clickedEvent: Event;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  local: any;
  promociones: any;


  public configSwiper: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,

  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private detalleMenuService: DetalleMenuService,
    private router: Router,
    private dataShare: DataShare,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.menuoLogo = MenuoLogo.menuLogoSrc;

    const config = localStorage.getItem('config');
    if (config) {
      this.config = JSON.parse(config);
      this.getMenu(this.config.id);
    }

    if (!localStorage.getItem('idioma')) {
      localStorage.setItem('idioma', '0');
    }


  }

  getMenu(id): void {
    this.spinner = true;
    this.categorias = [];
    this.detalleMenuService.getFullMenu(id).subscribe(menuFull => {
      this.spinner = false;
      localStorage.setItem('data', JSON.stringify(menuFull.msg));
      const idioma = localStorage.getItem('idioma');
      this.categorias = menuFull.msg[idioma].categorias;
    });
  }

  gotoDetalles(obj): void {
    this.dataShare.setCategoria(obj);
    this.router.navigate(['detalleMenuItems']);
  }

  updateSearchModel(value) {
    this.searchModel = value;
  }

  childEventClicked(event) {
    this.getMenu(this.config.id);
  }

}
