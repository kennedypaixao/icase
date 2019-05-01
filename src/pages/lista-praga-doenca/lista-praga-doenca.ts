import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ListaVerificacaoPage } from '../lista-verificacao/lista-verificacao';

@Component({
  selector: 'page-lista-praga-doenca',
  templateUrl: 'lista-praga-doenca.html',
})
export class ListaPragaDoencaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  goVerificacoes(){
    this.navCtrl.push(ListaVerificacaoPage);
  }

}
