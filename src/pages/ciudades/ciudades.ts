import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GeoDataProvider } from '../../providers/geo-data/geo-data';

import { SignUpPage } from '../sign-up/sign-up';
/**
 * Generated class for the CiudadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ciudades',
  templateUrl: 'ciudades.html',
})
export class CiudadesPage {

  public ciudades: any;
  public estadoSeleccionadoIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoService: GeoDataProvider) {
  	this.estadoSeleccionadoIndex = this.geoService.estadoSeleccionadoIndex;
  	this.showListCiudades(this.estadoSeleccionadoIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CiudadesPage');
  }

  showListCiudades(EstadoId){
  	let ciudad: any;
  	this.geoService.getGeoVenezuela()
  	.subscribe(data => {
  		ciudad = data[EstadoId].ciudades;
  		///console.log(EstadoId);
  		return this.ciudades = ciudad;	
  	});
  }

  passCiudad(ciudad){
  	this.geoService.recibirCiudad(ciudad);
  	this.navCtrl.push(SignUpPage);
  }

}
