import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Covid19 } from '../Model/Data.model';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(
    private http: HttpClient
  ) { }


  getDataColombia() {
    return this.http.get<Covid19[]>(`${environment.URL_API}colombia/status/confirmed`);
  }

  getDataVenezuela() {
    return this.http.get<Covid19[]>(`${environment.URL_API}venezuela/status/confirmed`);
  }

  getDataPanama() {
    return this.http.get<Covid19[]>(`${environment.URL_API}panama/status/confirmed`);
  }

  getDataEcuador() {
    return this.http.get<Covid19[]>(`${environment.URL_API}ecuador/status/confirmed`);
  }

  getDataPeru() {
    return this.http.get<Covid19[]>(`${environment.URL_API}peru/status/confirmed`);
  }

  getDataBrasil() {
    return this.http.get<Covid19[]>(`${environment.URL_API}brazil/status/confirmed`);
  }
}
