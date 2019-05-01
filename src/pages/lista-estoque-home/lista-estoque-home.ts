import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-lista-estoque-home',
  templateUrl: 'lista-estoque-home.html',
})
export class ListaEstoqueHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
 
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'myFiltro');
    this.menuCtrl.enable(true, 'myFiltroEstoque');
  }

}
