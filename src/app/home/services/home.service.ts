import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Configuration, ConfigurationFull, GetLocales } from '../model/configuration';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getFullConfiguration(id): Observable<ConfigurationFull> {
    const url = `${environment.urlBase}GetConfiguracion?id=${id}`;
    return this.http.get<ConfigurationFull>(url);
  }
  getFullConfigurationDelivery(id): Observable<ConfigurationFull> {
    const url = `${environment.urlBase}GetConfiguracion?id=${id}`;
    return this.http.get<ConfigurationFull>(url);
  }
  getLocalesDelivery(): Observable<GetLocales> {
    const url = `${environment.urlBaseDelivery}GetLocales`;
    return this.http.get<GetLocales>(url);
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
}
