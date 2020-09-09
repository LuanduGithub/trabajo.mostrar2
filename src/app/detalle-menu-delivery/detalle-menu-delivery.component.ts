import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleMenuService } from './services/detalle-menu.service';
import { Categorias } from './model/menuFull';
import { MenuoLogo } from './../../assets/logo';
import { DataShare } from '../core/dataShareService';
import { listAnimation, actionAnimation } from './../core/animations';
import { MatAccordion } from '@angular/material/expansion';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';


@Component({
  selector: 'app-detalle-menu-delivery',
  templateUrl: './detalle-menu-delivery.component.html',
  styleUrls: ['./detalle-menu-delivery.component.scss'],
  animations: [
    listAnimation,
    actionAnimation
  ],
})
export class DetalleMenuDeliveryComponent implements OnInit {
  categorias: Categorias[];
  spinner = false;
  menuoLogo: string;
  searchModel: string;
  config: any;
  public clickedEvent: Event;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  local: any;
  promociones: any;

  @Output() eventComanda = new EventEmitter<Event>();

  comanda = false;
  cartEffect = false;

  public configSwiper: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,

  };
  durationInSeconds: number;


  constructor(
    private detalleMenuService: DetalleMenuService,
    private router: Router,
    private dataShare: DataShare,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.menuoLogo = MenuoLogo.menuLogoSrc;

    const local = localStorage.getItem('config');
    if (local) {
      this.local = JSON.parse(local);
      this.getMenuDelivery(this.local.id);
    }

    if (!localStorage.getItem('idioma')) {
      localStorage.setItem('idioma', '0');
    }

  }

  getMenuDelivery(id): void {
    this.spinner = true;
    this.categorias = [];
    this.detalleMenuService.getFullMenuDelivery(id).subscribe(menuFull => {
      this.spinner = false;
      localStorage.setItem('data', JSON.stringify(menuFull.msg));
      const idioma = localStorage.getItem('idioma');
      this.categorias = menuFull.msg[idioma].categorias;
      this.promociones = menuFull.msg[idioma].promociones;
    });
  }

  gotoDetalles(obj): void {
    this.dataShare.setCategoria(obj);
    this.router.navigate(['detalleMenuDeliveryItems']);
  }

  updateSearchModel(value) {
    this.searchModel = value;
  }

  childEventClicked(event) {
    this.getMenuDelivery(this.config.id);
  }

  openDialog(obj) {
    this.cartEffect = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        obj,
        title: 'Agregar Promo',
        agregarPromo: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.comandaWithItem(result);

      }
    });
  }
  comandaWithItem(result): void {
    this.comanda = result;
    this.cartEffect = result;
  }



}
