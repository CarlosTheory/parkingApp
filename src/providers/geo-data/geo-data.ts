import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

import { EstadosPage } from '../../pages/estados/estados';



@Injectable()
export class GeoDataProvider {

  public estadoSeleccionado: string;
  public estadoSeleccionadoIndex: number;
  public ciudadSeleccionada: string;

  constructor(public http: HttpClient) {
    console.log('Hello GeoDataProvider Provider');
    this.getGeoVenezuela();
  }

  getGeoVenezuela(){
  	return this.http.get('../../assets/venezuela.json')
  	.map(res => res);
  }

  recibirEstado(estado, index){
  	this.estadoSeleccionado = estado;
  	this.estadoSeleccionadoIndex = index; 
  	console.log(estado, index);
  }

  recibirCiudad(ciudad){
  	this.ciudadSeleccionada = ciudad;
  }	
}
