import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ListaSafraPage } from '../pages/lista-safra/lista-safra';
import { AreaFazendaPage } from '../pages/area-fazenda/area-fazenda';
import { ListaChatPage } from '../pages/lista-chat/lista-chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  fazenda: string = "faz1";

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goSafra() {
    this.nav.push(ListaSafraPage);
  }

  goAreaFazenda() {
    this.nav.push(AreaFazendaPage);
  }

  goChat(){
    this.nav.push(ListaChatPage);
  }

  goSair(){
    this.nav.setRoot(LoginPage);
  }
}
