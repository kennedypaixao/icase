import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheTarefaMonitoramentoPage } from '../detalhe-tarefa-monitoramento/detalhe-tarefa-monitoramento';

/**
 * Generated class for the ListaObservacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-observacao',
  templateUrl: 'lista-observacao.html',
})
export class ListaObservacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goDetalheTarefaMonitoramento(){
    this.navCtrl.push(DetalheTarefaMonitoramentoPage);
  }

}
