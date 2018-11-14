import { ListaItem } from "./lista-item.model";

export class Lista {
    id: number;
    title: string;
    createdAt: Date;
    finishAt: Date;
    completed: boolean;
    items: ListaItem[];

    constructor( title:string ) {
        this.title = title;
        this.id = new Date().getTime();
        this.createdAt = new Date();
        this.finishAt = null;
        this.completed = false;
        this.items = [];
    }
}