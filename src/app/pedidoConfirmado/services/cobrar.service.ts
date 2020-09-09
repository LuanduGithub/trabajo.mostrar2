import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cobrar } from '../model/cobrar';
@Injectable({
  providedIn: 'root'
})
export class CobrarService {

  constructor(
    private http: HttpClient
  ) { }

  getCobrar(obj): Observable<Cobrar> {
    const url = `${environment.urlBaseDelivery}/CobrarPedido`;
    return this.http.post<Cobrar>(url, obj);
  }
}
