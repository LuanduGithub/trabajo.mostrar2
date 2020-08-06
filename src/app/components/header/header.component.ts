import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from './../../home/services/home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  config: any;
  showMenuButton = false;
  disableBtnComanda = true;
  public clickedEventComanda: Event;
  @Output() eventClicked = new EventEmitter<Event>();
  constructor(
    private router: Router,
    private homeService: HomeService,
    private location: Location

  ) {
    router.events.subscribe((val) => {
      if (this.router.url !== '/home') {
        this.showMenuButton = true;
      } else {
        this.showMenuButton = false;
      }
    });
  }

  ngOnInit(): void {
    const comandaStorage = localStorage.getItem('comanda');
    if (comandaStorage) {
      this.disableBtnComanda = false;
    }
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
  }
  gotoHome(): void {
    this.router.navigate(['home']);
  }

  previusPage(): void {
    this.location.back();
  }




  gotoComanda(): void {
    this.router.navigate(['comanda']);
  }



}


