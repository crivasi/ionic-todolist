import { Injectable } from "@angular/core";
import { Lista } from "../models"; // SE PUEDE REFERENCIAR DE ESTA FORMA POR EL ARCHIVO INDEX DENTRO DE MODELS

@Injectable()
export class DeseosService {

    listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarStorage();
    }

    borrarLista(lista: Lista) {
        this.listas = this.listas.filter( listaData => {
            return listaData.id !== lista.id
        });

        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data',JSON.stringify( this.listas ));
    }

    cargarStorage() {
        this.listas = JSON.parse(localStorage.getItem('data')) || [];
    }
}