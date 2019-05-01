import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../services/login/login';

@IonicPage()
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

  email: string = "";

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private loginService: LoginService) {
  }

  ionViewDidLoad() {
  }

  public lembrar(): void {
    this.loginService.esquecisenha(this.email).then((message) => {
      alert(message);
      this.navCtrl.pop();
    }, (er) => {
      if (er.Message) {
        alert(er.Message);
      } else {
        alert(er);
      }
    })
  }

}
