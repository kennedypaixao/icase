import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


declare var google;

@Component({
  selector: 'page-seleciona-localizacao',
  templateUrl: 'seleciona-localizacao.html',
})
export class SelecionaLocalizacaoPage {

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.instanteMap();
  }

  private instanteMap() {
    const position = new google.maps.LatLng(-21.763409, -43.349034);
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(document.getElementById('mapLocalizacao'), mapOptions);
  }

  goSelecionado(){
    this.viewCtrl.dismiss();
  }

}
