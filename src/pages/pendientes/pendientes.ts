import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AgregarListaPage } from '../agregar-lista/agregar-lista';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  constructor(public deseosService:DeseosService,
              private navCtrl:NavController,
              private alertCtrl:AlertController
  ) {
    
  }

  seleccionarLista(lista:Lista) {
    this.navCtrl.push( AgregarListaPage, {
      lista
    });
  }

  agregarLista() {
    this.mostrarAlerta();
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  mostrarAlerta() {
    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: "Ingresa el title de la nueva lista",
      inputs: [{
          name: 'title',
          placeholder: 'Title'
      }],
      buttons: [
        {
          text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
        },
        {
          text: 'Crear',
          handler: data => {
            if( !data.title ) {
              return;
            }
            this.navCtrl.push( AgregarListaPage, {
              title: data.title
            });
          }
        }]
    });
    alerta.present();
  }
}
