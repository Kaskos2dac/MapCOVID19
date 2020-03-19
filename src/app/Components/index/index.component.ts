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
  DataVenezuela: Covid19[] = [];
  DataPanama: Covid19[] = [];
  DataEcuador: Covid19[] = [];
  DataPeru: Covid19[] = [];
  DataBrasil: Covid19[] = [];
  zoom = 12;
  latitude = 4.229801;
  longitude = -71.2180022;
  mapType = 'terrain';
  lat = 4.6482837;
  lng = -74.2478934;
  text = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''}
  ];
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
    },
    {
      lat: 9.0813885,
      lng: -79.5932236,
      label: 'Panama',
      draggable: true,
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    {
      lat: -0.1865938,
      lng: -78.5706247,
      label: 'Ecuador',
      draggable: true,
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    {
      lat: -12.0266034,
      lng: -77.1278654,
      label: 'Peru',
      draggable: true,
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    {
      lat: -15.7750837,
      lng: -48.0772821,
      label: 'Brasil',
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
    this.getDataVenezuela();
    this.getDataPanama();
    this.getDataEcuador();
    this.getDataPeru();
    this.getDataBrasil();
  }

  getDataColombia() {
    return this.covid19Service.getDataColombia().subscribe(data => {
      this.DataColombia = data as Covid19[];
      this.text[0].text = `El numero de personas contagiadas a la fecha ${this.DataColombia.slice(-1)[0].Date.substring(0, 10)} es
      de ${this.DataColombia.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });
  }

  getDataVenezuela() {
    return this.covid19Service.getDataVenezuela().subscribe( data => {
      this.DataVenezuela = data as Covid19[];
      this.text[1].text = `El numero de personas contagiadas a la fecha ${this.DataVenezuela.slice(-1)[0].Date.substring(0, 10)} es
      de: ${this.DataVenezuela.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });

  }
  getDataPanama() {
    return this.covid19Service.getDataPanama().subscribe( data => {
      this.DataPanama = data as Covid19[];
      this.text[2].text = `El numero de personas contagiadas a la fecha ${this.DataPanama.slice(-1)[0].Date.substring(0, 10)} es
      de: ${this.DataPanama.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });

  }
  getDataEcuador() {
    return this.covid19Service.getDataEcuador().subscribe( data => {
      this.DataEcuador = data as Covid19[];
      this.text[3].text = `El numero de personas contagiadas a la fecha ${this.DataEcuador.slice(-1)[0].Date.substring(0, 10)} es
      de: ${this.DataEcuador.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });

  }
  getDataPeru() {
    return this.covid19Service.getDataPeru().subscribe( data => {
      this.DataPeru = data as Covid19[];
      this.text[4].text = `El numero de personas contagiadas a la fecha ${this.DataPeru.slice(-1)[0].Date.substring(0, 10)} es
      de: ${this.DataPeru.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });

  }
  getDataBrasil() {
    return this.covid19Service.getDataBrasil().subscribe( data => {
      this.DataBrasil = data as Covid19[];
      this.text[5].text = `El numero de personas contagiadas a la fecha ${this.DataBrasil.slice(-1)[0].Date.substring(0, 10)} es
      de: ${this.DataBrasil.slice(-1)[0].Cases}, esta información es suministrada por la API: https://covid19api.com/`;
    });

  }
}
