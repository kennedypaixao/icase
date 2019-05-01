import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-crud-maquina',
  templateUrl: 'crud-maquina.html',
})
export class CrudMaquinaPage {

  constructor(private navCtrl: NavController, private navParams: NavParams,private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
  }

  goSelectCamera() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Como gostaria de recuperar a foto?',
      buttons: [
        {
          text: 'Tirar Foto',
          role: 'destructive',
          handler: () => {
          }
        },{
          text: 'Escolher da Galeria',
          handler: () => {
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}
