import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { HomeService } from './home/services/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinner = false;
  constructor(
    private router: Router,
    location: Location,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
  ) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ngOnInit(): void {
    this.spinner = true;
    localStorage.setItem('comandaDelivery', '');
    localStorage.setItem('comanda', '');
/*     localStorage.removeItem('localDelivery'); */
    // const urlHash = location.hash.split('/');
    const urlPath = location.pathname.split('/');

    const url = location.hash.split('/');

    if (urlPath[1] === '') {
      this.spinner = false;
      this.router.navigate(['home']);
    }
    if (urlPath[1] !== '') {
      this.getConfigurationDelivery(urlPath);
    }
  }

  getConfigurationDelivery(urlPath): void {
    if (urlPath[1] === 'pagoConfirmado') {
      const urlInfo = location.href.split('&');
      const collector = urlInfo[0].split('=');
      const collectorId = collector[1];
      localStorage.setItem('collectorId', collectorId);
      this.router.navigate(['pagoConfirmado']);

      return;
    }
    if (urlPath[1] === 'pedidoFallido') { }
    this.homeService.getFullConfigurationDelivery(urlPath[1]).subscribe(config => {

      this.spinner = false;
      if (config.success) {
        localStorage.setItem('localDelivery', '[]');
        localStorage.setItem('config', JSON.stringify(config.msg));
        this.router.navigate(['detalleMenuDelivery']);
      } else {
        this.router.navigate(['home']);
      }

    });
  }
}
