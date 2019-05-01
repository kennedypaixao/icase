import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';

import { ComponentsModule } from "../components/components.module";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { ListaAtividadePage } from '../pages/lista-atividade/lista-atividade';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaSafraPage } from '../pages/lista-safra/lista-safra';
import { CrudSafraPage } from '../pages/crud-safra/crud-safra';
import { AreaFazendaPage } from '../pages/area-fazenda/area-fazenda';
import { ListaChatPage } from '../pages/lista-chat/lista-chat';
import { ChatPage } from '../pages/chat/chat';
import { TarefaAplicacaoPage } from '../pages/tarefa-aplicacao/tarefa-aplicacao';
import { TipoTarefaPage } from '../pages/tipo-tarefa/tipo-tarefa';
import { CrudTarefaPage } from '../pages/crud-tarefa/crud-tarefa';
import { MonitoramentoPage } from '../pages/monitoramento/monitoramento';
import { MonitoramentoAmostraPage } from '../pages/monitoramento-amostra/monitoramento-amostra';
import { AmostraPage } from '../pages/amostra/amostra';
import { ListaPragaDoencaPage } from '../pages/lista-praga-doenca/lista-praga-doenca';
import { ListaVerificacaoPage } from '../pages/lista-verificacao/lista-verificacao';
import { ContinuarMonitoramentoPage } from '../pages/continuar-monitoramento/continuar-monitoramento';
import { CrudOutroPage } from '../pages/crud-outro/crud-outro';
import { ListaInsumoPage } from '../pages/lista-insumo/lista-insumo';
import { CrudInsumoPage } from '../pages/crud-insumo/crud-insumo';
import { ListaMaquinaPage } from '../pages/lista-maquina/lista-maquina';
import { ModalInsumoPage } from '../pages/modal-insumo/modal-insumo';
import { ModalMaquinaPage } from '../pages/modal-maquina/modal-maquina';
import { CrudMaquinaPage } from '../pages/crud-maquina/crud-maquina';
import { ListaOperacaoPage } from '../pages/lista-operacao/lista-operacao';
import { DetalheTarefaMonitoramentoPage } from '../pages/detalhe-tarefa-monitoramento/detalhe-tarefa-monitoramento';
import { ListaAreaPage } from '../pages/lista-area/lista-area';
import { ListaObservacaoPage } from '../pages/lista-observacao/lista-observacao';
import { CrudObservacaoPage } from '../pages/crud-observacao/crud-observacao';
import { ListaMonitoramentoPage } from '../pages/lista-monitoramento/lista-monitoramento';
import { SelecionaLocalizacaoPage } from '../pages/seleciona-localizacao/seleciona-localizacao';
import { CrudPlantaPage } from '../pages/crud-planta/crud-planta';
import { ListaPragaPage } from '../pages/lista-praga/lista-praga';
import { CrudPragaPage } from '../pages/crud-praga/crud-praga';
import { ListaMaquinaHomePage } from '../pages/lista-maquina-home/lista-maquina-home';
import { DetalheMaquinaPage } from '../pages/detalhe-maquina/detalhe-maquina';
import { CrudMaquinaAbastecimentoPage } from '../pages/crud-maquina-abastecimento/crud-maquina-abastecimento';
import { ListaEstoqueHomePage } from '../pages/lista-estoque-home/lista-estoque-home';
import { LoginProvider } from '../providers/login/login';

import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from "../services/configuration/configuration";
import { LoginService } from '../services/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TabsPage,
    EsqueciSenhaPage,
    ListaAtividadePage,
    ListaSafraPage,
    CrudSafraPage,
    AreaFazendaPage,
    ListaChatPage,
    ChatPage,
    TarefaAplicacaoPage,
    TipoTarefaPage,
    CrudTarefaPage,
    MonitoramentoPage,
    MonitoramentoAmostraPage,
    AmostraPage,
    ListaPragaDoencaPage,
    ListaVerificacaoPage,
    ContinuarMonitoramentoPage,
    CrudOutroPage,
    ListaInsumoPage,
    CrudInsumoPage,
    ListaMaquinaPage,
    ModalInsumoPage,
    ModalMaquinaPage,
    CrudMaquinaPage,
    ListaOperacaoPage,
    DetalheTarefaMonitoramentoPage,
    ListaAreaPage,
    ListaObservacaoPage,
    CrudObservacaoPage,
    ListaMonitoramentoPage,
    SelecionaLocalizacaoPage,
    CrudPlantaPage,
    ListaPragaPage,
    CrudPragaPage,
    ListaMaquinaHomePage,
    DetalheMaquinaPage,
    CrudMaquinaAbastecimentoPage,
    ListaEstoqueHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom', tabsHideOnSubPages: true}),
    ComponentsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TabsPage,
    EsqueciSenhaPage,
    ListaAtividadePage,
    ListaSafraPage,
    CrudSafraPage,
    AreaFazendaPage,
    ListaChatPage,
    ChatPage,
    TarefaAplicacaoPage,
    TipoTarefaPage,
    CrudTarefaPage,
    MonitoramentoPage,
    MonitoramentoAmostraPage,
    AmostraPage,
    ListaPragaDoencaPage,
    ListaVerificacaoPage,
    ContinuarMonitoramentoPage,
    CrudOutroPage,
    ListaInsumoPage,
    CrudInsumoPage,
    ListaMaquinaPage,
    ModalInsumoPage,
    ModalMaquinaPage,
    CrudMaquinaPage,
    ListaOperacaoPage,
    DetalheTarefaMonitoramentoPage,
    ListaAreaPage,
    ListaObservacaoPage,
    CrudObservacaoPage,
    ListaMonitoramentoPage,
    SelecionaLocalizacaoPage,
    CrudPlantaPage,
    ListaPragaPage,
    CrudPragaPage,
    ListaMaquinaHomePage,
    DetalheMaquinaPage,
    CrudMaquinaAbastecimentoPage,
    ListaEstoqueHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,

    ConfigurationService,
    LoginService
  ]
})

export class AppModule {}
