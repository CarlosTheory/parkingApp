import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GeoDataProvider } from '../geo-data/geo-data';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {


  datosRegistro = {
    name: '',
    last_name: '',
    email: '',
    dni: '',
    password: '',
    confirm_password: '',
    country: 'Venezuela',
    state: '',
    city: '',
    address: '',
    zip_code: '',
    phone_number: ''
  };
  private API_URL = 'http://127.0.0.1/service-payment-app/public/api/';

  constructor(public http: HttpClient, public geoService: GeoDataProvider) {
    console.log('Hello AuthServiceProvider Provider');

    this.datosRegistro.state = this.geoService.estadoSeleccionado;
    this.datosRegistro.city = this.geoService.ciudadSeleccionada;

    console.log(this.datosRegistro);
  }

  // registrarUsuario(){
  // 	let headers = new HttpHeaders();
  // 	let route = 'user/new';

  // 	headers.append('Accept', 'application/json');
  // 	headers.append('Content-Type', 'application/json');

  // 	const request = new HttpRequest({ headers: headers }, this.API_URL+route );
  // }

}
