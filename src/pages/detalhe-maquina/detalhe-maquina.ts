import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrudMaquinaAbastecimentoPage } from '../crud-maquina-abastecimento/crud-maquina-abastecimento';

@Component({
  selector: 'page-detalhe-maquina',
  templateUrl: 'detalhe-maquina.html',
})
export class DetalheMaquinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  goNovoAbastecimento(){
    this.navCtrl.push(CrudMaquinaAbastecimentoPage);
  }

}
