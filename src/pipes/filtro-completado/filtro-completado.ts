import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models';

/**
 * Generated class for the FiltroCompletadoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtroCompletado',
  pure: false // es para que siempre este pendiente de aplicar el filtro en todas las pantallas
})
export class FiltroCompletadoPipe implements PipeTransform {
  transform(listas: Lista[], completado: boolean) {
    return listas.filter( lista => {
      return lista.completed === completado
    });
  }
}
