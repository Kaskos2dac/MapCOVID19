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
}
