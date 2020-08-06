import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DataShare {
    categoria: any;
    constructor() { }

    getCategoria(): any {
        return this.categoria;
    }

    setCategoria(obj): void {
        return this.categoria = obj;
    }
}
