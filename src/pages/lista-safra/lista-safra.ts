import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CrudSafraPage } from '../crud-safra/crud-safra';

/**
 * Generated class for the ListaSafraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-safra',
  templateUrl: 'lista-safra.html',
})
export class ListaSafraPage {

  isModal: boolean = false;

  constructor(private navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    var data = this.navParams.get('isModal');
    if(data){
      this.isModal = data;
    }
  }

  goCrud(){
    this.navCtrl.push(CrudSafraPage);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
