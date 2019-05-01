import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaAtividadePage } from '../lista-atividade/lista-atividade';
import { HomePage } from '../home/home';
import { AreaFazendaPage } from '../area-fazenda/area-fazenda';
import { ListaObservacaoPage } from '../lista-observacao/lista-observacao';
import { ListaMaquinaHomePage } from '../lista-maquina-home/lista-maquina-home';
import { ListaEstoqueHomePage } from '../lista-estoque-home/lista-estoque-home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ListaAtividadePage;
    this.tab2 = ListaObservacaoPage;
    this.tab3 = AreaFazendaPage;
    this.tab4 = ListaMaquinaHomePage;
    this.tab5 = ListaEstoqueHomePage;
  }

  ionViewDidLoad() {
  }

}
