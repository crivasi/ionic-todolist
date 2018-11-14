import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.serivce';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-agregar-lista',
  templateUrl: 'agregar-lista.html'
})
export class AgregarListaPage {

  lista: Lista;
  nombreItem: string = '';

  constructor(public deseosService:DeseosService,
              private navParams:NavParams
  ) {
    let tituloNuevaLista = this.navParams.get('title');
    this.lista = new Lista(tituloNuevaLista);
  }

  agregarItem() {
    if( this.nombreItem.length === 0 ) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
  }

  actualizarEstadoItem(item: ListaItem) {
    item.completed = !item.completed;
  }

  borrarItem(indice: number) {
    this.lista.items.splice(indice,1);
  }

}
