import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrudObservacaoPage } from '../crud-observacao/crud-observacao';

declare var google;

@Component({
  selector: 'page-detalhe-tarefa-monitoramento',
  templateUrl: 'detalhe-tarefa-monitoramento.html',
})
export class DetalheTarefaMonitoramentoPage {


  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.instanteMap();
  }

  
  private instanteMap(){
    const position = new google.maps.LatLng(-21.763409, -43.349034);
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  goCrudObservacao(){
    this.navCtrl.push(CrudObservacaoPage);
  }

}
