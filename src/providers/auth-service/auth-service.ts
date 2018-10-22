import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GeoDataProvider } from '../geo-data/geo-data';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private datosLogin = {
    email: '',
    password: '',
  };

  private token: any;

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
  }

  registrarUsuario(){

    //console.log(this.datosRegistro);
    let route = 'user/new';
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.http.post(this.API_URL+route, {
      name: this.datosRegistro.name,
      last_name: this.datosRegistro.last_name,
      email: this.datosRegistro.email,
      dni: this.datosRegistro.dni,
      password: this.datosRegistro.password,
      country: this.datosRegistro.country,
      state: this.datosRegistro.state,
      city: this.datosRegistro.city,
      address: this.datosRegistro.address,
      zip_code: this.datosRegistro.zip_code,
      phone_number: this.datosRegistro.phone_number
    }, {headers})
    .subscribe(val => {
      console.log("Respuesta", val);
    },
    response => {
      console.log("En error", response);
    },
    () => {
      console.log("completado");
    });
  }

  entrarLogin(){
    let token;
    let route = 'login';
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.http.post(this.API_URL+route, {
      email: this.datosLogin.email,
      password:this.datosLogin.password,
    }, {headers})
    .subscribe(val => {
      token = val;
      this.token = token.success.token
      console.log("Token: ", this.token);
    },
    response => {
      console.log("Error: ", response );
    });
  }

}
