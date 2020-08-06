import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuoLogo } from './../../assets/logo';
import { DataShare } from '../core/dataShareService';
import { listAnimation, actionAnimation } from './../core/animations';
import { Platos } from '../detalle-menu/model/menuFull';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HomeService } from '../home/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-menu-items',
  templateUrl: './detalle-menu-items.component.html',
  styleUrls: ['./detalle-menu-items.component.scss'],
  animations: [
    listAnimation,
    actionAnimation
  ],
})
export class DetalleMenuItemsComponent implements OnInit {
  menuoLogo: string;
  categoria: Platos[];
  selectedValue: any;
  searchModel: string;
  config: any;


  public clickedEvent: Event;


  @Output() eventComanda = new EventEmitter<Event>();
  comanda = false;

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
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        obj,
        title: 'Agregar a Comanda',
        agregar: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.comandaWithItem(result);
    });
  }

  openDialogImg(obj) {
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
    this.router.navigate(['detalleMenu']);
  }

  comandaWithItem(resutl): void {
    this.comanda = resutl;
  }
  gotoMenu() {
    this.router.navigate(['detalleMenu']);
  }
}
