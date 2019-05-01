import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrudInsumoPage } from '../crud-insumo/crud-insumo';
import { ModalInsumoPage } from '../modal-insumo/modal-insumo';

@Component({
  selector: 'page-lista-insumo',
  templateUrl: 'lista-insumo.html',
})
export class ListaInsumoPage {

  area:string = "fertilizante";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  adcionar(){
    this.navCtrl.push(CrudInsumoPage);
  }

  goModalInsumo(){
    this.navCtrl.push(ModalInsumoPage);
  }

}
