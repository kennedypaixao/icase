import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrudTarefaPage } from '../crud-tarefa/crud-tarefa';
import { MonitoramentoPage } from '../monitoramento/monitoramento';
import { CrudOutroPage } from '../crud-outro/crud-outro';

@Component({
  selector: 'page-tipo-tarefa',
  templateUrl: 'tipo-tarefa.html',
})
export class TipoTarefaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goCrudTarefa(){
    this.navCtrl.push(CrudTarefaPage);
  }

  goMonitoramento(){
    this.navCtrl.push(MonitoramentoPage);
  }

  goCrudOutro(){
    this.navCtrl.push(CrudOutroPage);
  }

}
