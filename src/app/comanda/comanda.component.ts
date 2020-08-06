import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/services/home.service';
import { listAnimation, actionAnimation } from './../core/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {
  config: any;
  comandas: any[];
  selectedValue: any;
  disableRemoveBtn = false;
  total: number;
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
    const comanda = localStorage.getItem('comanda');
    const comandaObj = JSON.parse(comanda);
    this.comandas = comandaObj.map(com => {
      return {
        id: com.item.id,
        cant: com.cant,
        ingredientes: com.item.ingredientes,
        nombre: com.item.nombre,
        precios: com.item.precios[0].valor * com.cant
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
    const comandaStorage = localStorage.getItem('comanda');
    comanda = JSON.parse(comandaStorage);
    const comandaPlusOne = comanda.map(obj => {
      if (item.id === obj.item.id) {
        obj.cant = obj.cant + 1;
        this.disableRemoveBtn = false;
      }
      return obj;
    });
    localStorage.setItem('comanda', JSON.stringify(comandaPlusOne));
    this.getComandaAndSum();
  }

  removeItem(item) {
    let comanda = [];
    const comandaStorage = localStorage.getItem('comanda');
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

    localStorage.setItem('comanda', JSON.stringify(comandaPlusOne));
    this.getComandaAndSum();
  }

  deleteItem(i) {
    this.comandas = [];
    let comanda = [];
    const comandaStorage = localStorage.getItem('comanda');
    comanda = JSON.parse(comandaStorage);

    if (i > -1) {
      comanda.splice(i, 1);
    }

    localStorage.setItem('comanda', JSON.stringify(comanda));


    if (comanda.length < 1) {
      this.router.navigate(['detalleMenu']);
      return;
    }


    this.getComandaAndSum();
  }

  gotoMenu() {
    this.router.navigate(['detalleMenu']);
  }



}
