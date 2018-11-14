import { Component } from '@angular/core';
import { DeseosService } from '../../providers/deseos.serivce';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html'
})
export class TerminadosPage {

  constructor(public deseosService: DeseosService) {

  }

}
