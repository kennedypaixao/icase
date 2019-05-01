import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContinuarMonitoramentoPage } from '../continuar-monitoramento/continuar-monitoramento';

@Component({
  selector: 'page-lista-verificacao',
  templateUrl: 'lista-verificacao.html',
})
export class ListaVerificacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  goContinuarMonitoramento(){
    this.navCtrl.push(ContinuarMonitoramentoPage)
  }

}
