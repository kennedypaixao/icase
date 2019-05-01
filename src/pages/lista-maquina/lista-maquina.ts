import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalMaquinaPage } from '../modal-maquina/modal-maquina';
import { CrudMaquinaPage } from '../crud-maquina/crud-maquina';

/**
 * Generated class for the ListaMaquinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-maquina',
  templateUrl: 'lista-maquina.html',
})
export class ListaMaquinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goCrud(){
    this.navCtrl.push(CrudMaquinaPage);
  }

  goModal(){
    this.navCtrl.push(ModalMaquinaPage);
  }

}
