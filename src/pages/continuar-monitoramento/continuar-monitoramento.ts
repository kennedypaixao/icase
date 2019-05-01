import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-continuar-monitoramento',
  templateUrl: 'continuar-monitoramento.html',
})
export class ContinuarMonitoramentoPage {

  area: string = "sumario";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  salvar() {
    let index = this.navCtrl.length();
    this.navCtrl.remove(0, index);
  }

}
