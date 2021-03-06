import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuFull } from '../model/menuFull';
@Injectable({
  providedIn: 'root'
})
export class DetalleMenuService {

  constructor(
    private http: HttpClient
  ) { }

  getFullMenu(id): Observable<MenuFull> {
    const url = `${environment.urlBase}GetMenus?id=${id}`;
    return this.http.get<MenuFull>(url);
  }
}
