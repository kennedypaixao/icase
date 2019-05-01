import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSafraPage } from './lista-safra';

@NgModule({
  declarations: [
    ListaSafraPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSafraPage),
  ],
})
export class ListaSafraPageModule {}
