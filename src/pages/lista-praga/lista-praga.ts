import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrudPragaPage } from '../crud-praga/crud-praga';

/**
 * Generated class for the ListaPragaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-praga',
  templateUrl: 'lista-praga.html',
})
export class ListaPragaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  goCrud(){
    this.navCtrl.push(CrudPragaPage)
  }

}
