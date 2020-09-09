import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Confirmar } from './confirmar';
@Injectable({
  providedIn: 'root'
})

export class ConfirmarPedidoService {

  constructor(
    private http: HttpClient
  ) { }
  postConfirmar(obj): Observable<Confirmar> {
    const url = `${environment.urlBaseDelivery}EnviarPedido`;
    return this.http.post<Confirmar>(url, obj);
  }
}
