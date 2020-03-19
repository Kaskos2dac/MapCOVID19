import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/Core/Services/covid19.service';
import { Covid19 } from 'src/app/Core/Model/Data.model';
import { GoogleMap } from '@angular/google-maps';
import { Marker } from 'src/app/Core/Model/Marker.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  DataColombia: Covid19[] = [];
  zoom = 12;
  latitude = 4.229801;
  longitude = -71.2180022;
  mapType = 'terrain';
  lat = 4.6482837;
  lng = -74.2478934;
  textColombia = '';
  labelOptions = {
    color: 'white',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Detalles Colombia'
  };
  markers: Marker[] = [
    {
      lat: 4.6482837,
      lng: -74.2478934,
      label: 'Colombia',
      draggable: true,
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',

    },
    {
      lat: 10.4683841,
      lng: -66.9604063,
      label: 'Venezuela',
      draggable: true,
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    }
  ];


  constructor(
    private covid19Service: Covid19Service
  ) { }

  ngOnInit(): void {
    this.getDataColombia();
  }

  getDataColombia() {
    return this.covid19Service.getDataColombia().subscribe(data => {
      this.DataColombia = data as Covid19[];
      console.log(this.DataColombia.slice(-1)[0]);
      this.textColombia = `El numero de personas contagiadas a la fecha ${this.DataColombia.slice(-1)[0].Date} es
      de ${this.DataColombia.slice(-1)[0].Cases} esta información es suministrada por la API: https://covid19api.com/`;
    });
  }
}
