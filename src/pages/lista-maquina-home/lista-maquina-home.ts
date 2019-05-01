import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalheMaquinaPage } from '../detalhe-maquina/detalhe-maquina';

/**
 * Generated class for the ListaMaquinaHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-maquina-home',
  templateUrl: 'lista-maquina-home.html',
})
export class ListaMaquinaHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goDetalhe(){
    this.navCtrl.push(DetalheMaquinaPage)
  }

}
