import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { ListaSafraPage } from '../lista-safra/lista-safra';
import { TarefaAplicacaoPage } from '../tarefa-aplicacao/tarefa-aplicacao';
import { TipoTarefaPage } from '../tipo-tarefa/tipo-tarefa';
import { DetalheTarefaMonitoramentoPage } from '../detalhe-tarefa-monitoramento/detalhe-tarefa-monitoramento';
import { ListaAreaPage } from '../lista-area/lista-area';

@IonicPage()
@Component({
  selector: 'page-lista-atividade',
  templateUrl: 'lista-atividade.html',
})
export class ListaAtividadePage {

  fazenda = "faz1";

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'myMenu');
    this.menuCtrl.enable(true, 'myFiltro');
    this.menuCtrl.enable(false, 'myFiltroEstoque');
  }

  goSafra() {
    let modal = this.modalCtrl.create(ListaSafraPage, { isModal: true });
    modal.onDidDismiss(data => {
    });
    modal.present();
  }

  
  goTarefaAplicacao(){
    this.navCtrl.push(TarefaAplicacaoPage);
  }

  goTipoTarefa(){
    this.navCtrl.push(TipoTarefaPage);
  }

  goDetalheTarefaMonitoramento(){
    this.navCtrl.push(DetalheTarefaMonitoramentoPage);
  }

  goAdicionarTarefa(){
    this.navCtrl.push(ListaAreaPage);
  }


}
