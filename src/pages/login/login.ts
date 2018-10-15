import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  pushSignUp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pushSignUp = SignUpPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
