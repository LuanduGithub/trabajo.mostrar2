import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  constructor(
    private http: HttpClient
  ) { }

  callService(id): Observable<any> {
    const url = `${environment.urlBase}GetLlamarServicio?id=${id}`;
    return this.http.get<any>(url);
  }

}
