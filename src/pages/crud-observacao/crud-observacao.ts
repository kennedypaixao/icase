import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ListaMonitoramentoPage } from '../lista-monitoramento/lista-monitoramento';
import { SelecionaLocalizacaoPage } from '../seleciona-localizacao/seleciona-localizacao';
import { CrudPlantaPage } from '../crud-planta/crud-planta';

@Component({
  selector: 'page-crud-observacao',
  templateUrl: 'crud-observacao.html',
})
export class CrudObservacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  goMonitoramento(){
    let modal = this.modalCtrl.create(ListaMonitoramentoPage);
    modal.onDidDismiss(data => {
    });
    modal.present();
  }

  goSelecionaLocalizacao(){
    let modal = this.modalCtrl.create(SelecionaLocalizacaoPage);
    modal.onDidDismiss(data => {
    });
    modal.present();
  }


  goPlanta(){
    let modal = this.modalCtrl.create(CrudPlantaPage);
    modal.onDidDismiss(data => {
    });
    modal.present();
  }

}
