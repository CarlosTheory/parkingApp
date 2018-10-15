import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GeoDataProvider } from '../../providers/geo-data/geo-data';
import { SignUpPage } from '../sign-up/sign-up';




// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-estados',
  templateUrl: 'estados.html',
})
export class EstadosPage {
  // Contenedor del array de los estados
  public estados: any;

  // public estadoIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geoService: GeoDataProvider) {
  	this.showListEstados();
  }

  showListEstados(){
    // Variable de tipo Observable que recibira la respuesta y la hara mostrable
    let state: any; 
    this.geoService.getGeoVenezuela()
    .subscribe(data => {
      state = data;
      // retornar state, pasandolo a this.estados que es la que esta declarada al principio
      return this.estados = state;
    });
  }

  passEstado(estado, index){
    this.geoService.recibirEstado(estado, index);
    this.navCtrl.push(SignUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadosPage');
  }

}
