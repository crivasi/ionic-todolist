import { Injectable } from "@angular/core";
import { Lista } from "../models"; // SE PUEDE REFERENCIAR DE ESTA FORMA POR EL ARCHIVO INDEX DENTRO DE MODELS

@Injectable()
export class DeseosService {

    listas: Lista[] = [];
    constructor() {
        const lista1 = new Lista('prueba lista 1');
        const lista2 = new Lista('prueba lista 2');

        this.listas.push(lista1,lista2);

    }

}