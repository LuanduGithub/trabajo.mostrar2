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
  pos: { lat: any; long: any; };

  constructor(
    location: Location,
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPosition();
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

  getConfigurationDelivery(id): void {
    this.homeService.getFullConfigurationDelivery(id).subscribe(config => {
      this.spinner = false;
      localStorage.setItem('config', JSON.stringify(config.msg));
      this.router.navigate(['detalleMenuDelivery']);
    });
  }

  /* updateSearchModel(value) {
    this.localModel = value;
  } */
  updateSearchModel = value => {
    this.localModel = value;
  }

  getLocals(): void {
    this.homeService.getLocalesDelivery().subscribe(loc => {
      const locals = loc.locales.sort(() => Math.random() - 0.5);
      this.locals = locals;
    });
  }

  gotoDeliveryMenu(local): void {
    this.getConfigurationDelivery(local.subtitulo);
    localStorage.setItem('localDelivery', JSON.stringify(local));
  }

  getPosition() {
    this.homeService.getPosition().then(pos => {
      // this.geocodeLatLng(pos.lat, pos.lng);
    });
  }

  geocodeLatLng(lat, lng) {
    const latlng = {
      lat,
      lng
    };
    const geocode = new google.maps.Geocoder();
    geocode.geocode(
      { location: latlng },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        console.log(results);
        console.log(status);
      }
    );
  }




}
