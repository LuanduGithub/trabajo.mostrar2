import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  selectedValue: string;
  cantModel = '1';
  adicionalesModel: string;

  cantFormControl: FormControl;
  config: any;
  spinner = false;
  userDataCompleted = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
  }
  addItemComanda(cant, adi) {
    const obj = [{
      item: this.data.obj,
      cant: parseInt(cant, 10),
      adicionales: adi || ''
    }];
    let comanda = [] = obj;
    if (this.data.agregarPromo || this.data.agregarDelivery) {
      const comandaStorage = localStorage.getItem('comandaDelivery');
      if (comandaStorage) {
        const comandaObj = JSON.parse(comandaStorage);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < comandaObj.length; i++) {
          if (this.data.obj.id === comandaObj[i].item.id) {
            comandaObj[i].cant = comandaObj[i].cant + 1;
            localStorage.setItem('comandaDelivery', JSON.stringify(comandaObj));
            return;
          }
        }
        comanda = comanda.concat(JSON.parse(comandaStorage));
        localStorage.setItem('comandaDelivery', JSON.stringify(comanda));
        return;
      }
      localStorage.setItem('comandaDelivery', JSON.stringify(obj));
    }

    if (this.data.agregar) {
      const comandaStorage = localStorage.getItem('comanda');
      if (comandaStorage) {
        comanda = comanda.concat(JSON.parse(comandaStorage));
      }
      localStorage.setItem('comanda', JSON.stringify(comanda));
    }

  }




  userData() {
    this.userDataCompleted = true;
  }



}
