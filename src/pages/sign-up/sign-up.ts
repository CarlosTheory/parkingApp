import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { GeoDataProvider } from '../../providers/geo-data/geo-data';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { EstadosPage } from '../estados/estados';
import { CiudadesPage } from '../ciudades/ciudades';



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
  public datosRegistro = {};


  //public estadoSeleccionado: string = "Ninguno";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public geoService: GeoDataProvider,
    public authService: AuthServiceProvider
    ){
    this.estadoSeleccionado = this.geoService.estadoSeleccionado;
    this.estadoSeleccionadoIndex = this.geoService.estadoSeleccionadoIndex;
    this.ciudadSeleccionada = this.geoService.ciudadSeleccionada;

    this.authService.datosRegistro.state = this.estadoSeleccionado;
    this.authService.datosRegistro.city = this.ciudadSeleccionada;

    this.datosRegistro = this.authService.datosRegistro;
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

  pasarDatosRegistro(){
    this.authService.registrarUsuario();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
