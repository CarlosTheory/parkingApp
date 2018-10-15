import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { GeoDataProvider } from '../../providers/geo-data/geo-data';

import { EstadosPage } from '../estados/estados';
import { CiudadesPage } from '../ciudades/ciudades';
import { LoginPage } from '../login/login';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public estadoSeleccionado: string;
  public estadoSeleccionadoIndex: number;
  public ciudadSeleccionada: string;

  public pushHome: any;


  //public estadoSeleccionado: string = "Ninguno";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public geoService: GeoDataProvider) {
    this.estadoSeleccionado = this.geoService.estadoSeleccionado;
    this.estadoSeleccionadoIndex = this.geoService.estadoSeleccionadoIndex;
    this.ciudadSeleccionada = this.geoService.ciudadSeleccionada;
  }

  modalEstados(){
    let modalEstados = this.modalCtrl.create(EstadosPage);
    modalEstados.present();
  }

   modalCiudades(){
    let modalCiudades = this.modalCtrl.create(CiudadesPage, {
      index: this.estadoSeleccionadoIndex,
      estadoName: this.estadoSeleccionado
    });
    modalCiudades.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
