import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Configuration } from './../../home/model/configuration';
import { Router } from '@angular/router';
import { CallserviceService } from './services/callservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  config: any;
  @Output() eventClicked = new EventEmitter<Event>();
  @Input() comanda = false;
  calling = false;
  constructor(
    private router: Router,
    private callService: CallserviceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
    let comanda = localStorage.getItem('comanda');
    let comandaDelivery = localStorage.getItem('comandaDelivery');

    if (comanda) {
      comanda = JSON.parse(comanda);
      if (comanda.length > 0) {
        this.comanda = true;
      }
    }
    if (comandaDelivery) {
      comandaDelivery = JSON.parse(comandaDelivery);
      if (comandaDelivery.length > 0) {
        this.comanda = true;
      }
    }
  }

  gotoComandaSection() {
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
    if (this.config) {
      this.gotoComanda();
    } else {
      this.gotoComandaDelivery();
    }
  }

  gotoComanda(): void {
    this.router.navigate(['comanda']);
  }
  gotoComandaDelivery(): void {
    this.router.navigate(['comandaDelivery']);
  }


  onClick($event): void {
    localStorage.setItem('idioma', $event);
    this.eventClicked.emit($event);
  }

  userCallService(id) {
    this.callService.callService(id).subscribe(call => {
      this.calling = true;
    });

  }



  openDialogConfirmar() {
    let comanda = localStorage.getItem('comanda');
    comanda = JSON.parse(comanda);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        comanda,
        title: 'Confirmar Pedido',
        confirmar: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.setItem('comanda', '');
        this.router.navigate(['detalleMenu']);
      }
    });
  }

}
