import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-crud-safra',
  templateUrl: 'crud-safra.html',
})
export class CrudSafraPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  salvar(){
    this.navCtrl.pop();
  }

}
