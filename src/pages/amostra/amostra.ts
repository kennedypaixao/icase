import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ListaSafraPage } from '../lista-safra/lista-safra';
import { ListaPragaDoencaPage } from '../lista-praga-doenca/lista-praga-doenca';

@Component({
  selector: 'page-amostra',
  templateUrl: 'amostra.html',
})
export class AmostraPage {

  area: string = "ponto";

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  goTalhao(){
    let modal = this.modalCtrl.create(ListaSafraPage, { isModal: true });
    modal.onDidDismiss(data => {
    });
    modal.present();
  }

  goDoencaPraga(){
    let modal = this.modalCtrl.create(ListaPragaDoencaPage, { isModal: true });
    modal.onDidDismiss(data => {
    });
    modal.present();
  }
}
