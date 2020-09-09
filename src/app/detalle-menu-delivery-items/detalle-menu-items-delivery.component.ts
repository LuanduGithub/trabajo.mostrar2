import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuoLogo } from '../../assets/logo';
import { DataShare } from '../core/dataShareService';
import { listAnimation, actionAnimation } from '../core/animations';
import { Platos } from '../detalle-menu/model/menuFull';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HomeService } from '../home/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-menu-items-delivery',
  templateUrl: './detalle-menu-items-delivery.component.html',
  styleUrls: ['./detalle-menu-items-delivery.component.scss'],
  animations: [
    listAnimation,
    actionAnimation
  ],
})
export class DetalleMenuDeliveryItemsComponent implements OnInit {
  menuoLogo: string;
  categoria: Platos[];
  selectedValue: any;
  searchModel: string;
  config: any;


  public clickedEvent: Event;


  @Output() eventComanda = new EventEmitter<Event>();
  comanda = false;
  cartEffect = false;
  constructor(
    private dataShare: DataShare,
    public dialog: MatDialog,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const categoriaItems = this.dataShare.getCategoria();
    this.categoria = categoriaItems.platos;
    this.menuoLogo = MenuoLogo.menuLogoSrc;
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
  }

  updateSearchModel(value) {
    this.searchModel = value;
  }
  openDialog(obj) {
    this.cartEffect = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        obj,
        title: 'Agregar a Envío',
        agregarDelivery: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.comandaWithItem(result);
      }
    });
  }

  openDialogImg(obj, event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        obj,
        img: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  childEventClicked(event): void {
    this.clickedEvent = event;
    this.router.navigate(['detalleMenuDelivery']);
  }

  comandaWithItem(result): void {
    this.cartEffect = result;
    this.comanda = result;
  }
  gotoMenu() {
    this.router.navigate(['detalleMenuDelivery']);
  }
}
