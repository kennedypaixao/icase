import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ListaOperacaoPage } from '../lista-operacao/lista-operacao';

@Component({
  selector: 'page-crud-tarefa',
  templateUrl: 'crud-tarefa.html',
})
export class CrudTarefaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  goOperacao() {
    const modal = this.modalCtrl.create(ListaOperacaoPage);
    modal.present();
  }

}
