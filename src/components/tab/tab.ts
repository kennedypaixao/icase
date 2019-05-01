import { Component } from '@angular/core';
import { ListaAtividadePage } from '../../pages/lista-atividade/lista-atividade';

@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {
    this.tab1 = ListaAtividadePage;
    this.tab2 = ListaAtividadePage;
    this.tab3 = ListaAtividadePage;
    this.tab4 = ListaAtividadePage;
  }

}
