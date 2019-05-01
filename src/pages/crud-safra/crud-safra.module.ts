import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudSafraPage } from './crud-safra';

@NgModule({
  declarations: [
    CrudSafraPage,
  ],
  imports: [
    IonicPageModule.forChild(CrudSafraPage),
  ],
})
export class CrudSafraPageModule {}
