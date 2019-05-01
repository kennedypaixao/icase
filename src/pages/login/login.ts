import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { ListaAtividadePage } from '../lista-atividade/lista-atividade';
import { TabsPage } from '../tabs/tabs';
import { LoginService } from '../../services/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    email: "edesoft@edesoft.com.br",
    senha: "123",
  }

  cadastro: any = {
    email: "",
    senha: "",
    confirmasenha: "",
    nome: "",
    termos: false
  }

  login: string = "signin";
  gaming: string = "nes";

  constructor(private navCtrl: NavController,
    private menuCtrl: MenuController,
    private loginService: LoginService) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
  }


  public goEsqueciSenha() {
    this.navCtrl.push(EsqueciSenhaPage)
  }

  public goLogin(): void {
    this.loginService.auth(this.user.email, this.user.senha).then((user) => {
      this.navCtrl.setRoot(TabsPage);
    }, (er) => {
      if (er.Message) {
        alert(er.Message);
      } else {
        alert(er);
      }
    })
  }

  public register(): void {
    this.loginService.register(this.cadastro.email, this.cadastro.senha,this.cadastro.confirmasenha, this.cadastro.nome, this.cadastro.termos).then((user) => {
      alert("Cadastro realizado com sucesso!");
      this.navCtrl.setRoot(TabsPage);
    }, (er) => {
      if (er.Message) {
        alert(er.Message);
      } else {
        alert(er);
      }
    })
  }

  selectarea() {
  }

}
