import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/services/home.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-comanda-delivery',
  templateUrl: './comanda-delivery.component.html',
  styleUrls: ['./comanda-delivery.component.scss']
})
export class ComandaDeliveryComponent implements OnInit {
  config: any;
  comandas: any[];
  selectedValue: any;
  disableRemoveBtn = false;
  total: number;
  envioVal = 0;
  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
    this.getComandaAndSum();
  }

  getComandaAndSum() {
    const comanda = localStorage.getItem('comandaDelivery');
    const comandaObj = JSON.parse(comanda);
    this.comandas = comandaObj.map(com => {
      return {
        id: com.item.id,
        cant: com.cant,
        ingredientes: com.item.ingredientes,
        nombre: com.item.nombre,
        foto: com.item.foto,
        precios: (com.item.precio * com.cant) + this.config.delivery
      };
    });
    let total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.comandas.length; i++) {
      total += this.comandas[i].precios;
    }
    this.total = total;
  }

  addItem(item) {
    let comanda = [];
    const comandaStorage = localStorage.getItem('comandaDelivery');
    comanda = JSON.parse(comandaStorage);
    const comandaPlusOne = comanda.map(obj => {
      if (item.id === obj.item.id) {
        obj.cant = parseInt(obj.cant, 10) + 1;
        this.disableRemoveBtn = false;
      }
      return obj;
    });
    localStorage.setItem('comandaDelivery', JSON.stringify(comandaPlusOne));
    this.getComandaAndSum();
  }

  removeItem(item) {
    let comanda = [];
    const comandaStorage = localStorage.getItem('comandaDelivery');
    comanda = JSON.parse(comandaStorage);
    const comandaPlusOne = comanda.map(obj => {
      if (item.id === obj.item.id) {
        if (obj.cant < 2) {
          this.disableRemoveBtn = true;
        } else {
          obj.cant = obj.cant - 1;
        }

      }
      return obj;
    });

    localStorage.setItem('comandaDelivery', JSON.stringify(comandaPlusOne));
    this.getComandaAndSum();
  }

  deleteItem(i) {
    this.comandas = [];
    let comanda = [];
    const comandaStorage = localStorage.getItem('comandaDelivery');
    comanda = JSON.parse(comandaStorage);

    if (i > -1) {
      comanda.splice(i, 1);
    }

    localStorage.setItem('comandaDelivery', JSON.stringify(comanda));

    if (comanda.length < 1) {
      this.router.navigate(['detalleMenuDelivery']);
      return;
    }
    this.getComandaAndSum();
  }

  gotoMenu() {
    this.router.navigate(['detalleMenuDelivery']);
  }



}
