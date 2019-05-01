import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { ListaInsumoPage } from '../lista-insumo/lista-insumo';
import { ListaMaquinaPage } from '../lista-maquina/lista-maquina';
import { ListaOperacaoPage } from '../lista-operacao/lista-operacao';

@Component({
  selector: 'page-crud-outro',
  templateUrl: 'crud-outro.html',
})
export class CrudOutroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  goInsumos(){
    this.navCtrl.push(ListaInsumoPage);
  }
  
  goMaquinas(){
    this.navCtrl.push(ListaMaquinaPage);
  }

  goOperacao() {
    const modal = this.modalCtrl.create(ListaOperacaoPage);
    modal.present();
  }

}
