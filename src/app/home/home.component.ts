import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuoLogo } from './../../assets/logo';
import { HomeService } from './services/home.service';
import { Configuration, Local } from './model/configuration';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuoLogo: string;
  config: Configuration;
  spinner = false;
  location: Location;
  locals: Local[];
  localModel: string;


  constructor(
    location: Location,
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.spinner = true;
    const url = location.hash.split('/');
    this.menuoLogo = MenuoLogo.menuLogoSrc;
    if (url[2]) {
      this.getConfiguration(url[2]);
    } else {
      this.getLocals();
      this.spinner = false;
    }

  }

  gotoDetalleMenu(): void {
    this.router.navigate(['detalleMenu']);
  }



  getConfiguration(id): void {
    this.homeService.getFullConfiguration(id).subscribe(config => {
      this.spinner = false;
      localStorage.setItem('config', JSON.stringify(config.msg));
      this.config = config.msg;
    });
  }


  getLocals(): void {
    this.homeService.getLocalesDelivery().subscribe(loc => {
      const locals = loc.locales.sort(() => Math.random() - 0.5);
      this.locals = locals;
    });

  }

  gotoDeliveryMenu(local) {
    localStorage.setItem('localDelivery', JSON.stringify(local));
    this.router.navigate(['detalleMenuDelivery']);
  }




}
