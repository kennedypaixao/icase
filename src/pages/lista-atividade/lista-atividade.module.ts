import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAtividadePage } from './lista-atividade';

import { TabComponent } from "../../components/tab/tab";

@NgModule({
  declarations: [
    ListaAtividadePage,
    TabComponent
  ],
  imports: [
    IonicPageModule.forChild(ListaAtividadePage),
  ],
})
export class ListaAtividadePageModule {}
