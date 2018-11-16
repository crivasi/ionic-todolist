import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
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
    if( this.navParams.get('lista') ) {
      this.lista = this.navParams.get('lista');
    } else {
      let tituloNuevaLista = this.navParams.get('title');
      this.lista = new Lista(tituloNuevaLista);
      this.deseosService.agregarLista( this.lista );
    }
  }

  agregarItem() {
    if( this.nombreItem.length === 0 ) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.deseosService.guardarStorage();

    this.nombreItem = '';
  }

  actualizarEstadoItem(item: ListaItem) {
    item.completed = !item.completed;

    const itemsPendientes = this.lista.items.filter( itemData => !itemData.completed ).length;

    let listaCompleted = false;
    let listaFechaCompleted = null;

    if( itemsPendientes === 0 ) {
      listaCompleted = true;
      listaFechaCompleted = new Date();
    } 
    
    this.lista.completed = listaCompleted;
    this.lista.finishAt = listaFechaCompleted;

    this.deseosService.guardarStorage();
  }

  borrarItem(indice: number) {
    this.lista.items.splice(indice,1);

    this.deseosService.guardarStorage();
  }
}
