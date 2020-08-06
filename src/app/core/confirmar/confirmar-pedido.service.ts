import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ConfirmarPedidoService {

  constructor(
    private http: HttpClient
  ) { }
  postConfirmar(obj): Observable<any> {
    const url = `${environment.urlBaseDelivery}EnviarPedido`;
    return this.http.post<any>(url, obj);
  }
}
