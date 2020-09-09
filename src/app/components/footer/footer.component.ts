import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Configuration } from './../../home/model/configuration';
import { Router } from '@angular/router';
// import { CallserviceService } from './services/callservice.service';
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
  @Input() cartEffect = false;
  calling = false;
  comandaObj: any;
  localDelivery = false;
  constructor(
    private router: Router,
    // private callService: CallserviceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getType();
    this.getLocalDelivery();
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
    if (this.comandaObj?.obj && this.comandaObj?.obj.length > 0) {
      this.comanda = true;
    }

  }

  getLocalDelivery() {
    const localDelivery = localStorage.getItem('localDelivery');
    if (localDelivery) {
      this.localDelivery = true;
    } else {
      this.localDelivery = false;
    }
  }

  getType(): void {
    let comandaRestorant;
    let comandaDelivery;
    comandaDelivery = localStorage.getItem('comandaDelivery');
    if (comandaDelivery) {
      this.comandaObj = {
        obj: JSON.parse(comandaDelivery),
        type: 'comandaDelivery'
      };
    }
    comandaRestorant = localStorage.getItem('comanda');
    if (comandaRestorant) {
      this.comandaObj = {
        obj: JSON.parse(comandaRestorant),
        type: 'comandaRestorant'
      };
    }
  }

  gotoHome(): void {
    localStorage.setItem('comandaDelivery', '');
    localStorage.setItem('comanda', '');
    this.router.navigate(['home']);
  }

  gotoComanda(): void {
    this.getType();
    this.comandaObj?.type === 'comandaRestorant' ? this.router.navigate(['comanda']) : this.router.navigate(['comandaDelivery']);
  }

  onClick($event): void {
    localStorage.setItem('idioma', $event);
    this.eventClicked.emit($event);
  }

  /* userCallService(id) {
    this.callService.callService(id).subscribe(call => {
      this.calling = true;
    });

  } */
  cleanComanda() {
    this.getType();
    localStorage.setItem('comandaDelivery', '');
    localStorage.setItem('comanda', '');
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.comandaObj.type === 'comandaDelivery' ? this.router.navigate(['detalleMenuDelivery']) : this.router.navigate(['detalleMenu']);
    });

  }

  gotoPedidoConfirmar(): void {
    this.getType();
    this.router.navigate(['pedidoConfirmar']);
  }
  gotoPedidoConfirmado(): void {
    this.getType();
    this.router.navigate(['pedidoConfirmado']);
  }

}
