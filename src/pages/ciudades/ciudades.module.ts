import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CiudadesPage } from './ciudades';

@NgModule({
  declarations: [
    CiudadesPage,
  ],
  imports: [
    IonicPageModule.forChild(CiudadesPage),
  ],
})
export class CiudadesPageModule {}
