export class MenuFull {
    success: boolean;
    msg: Menu[];
}
export class Menu {
    id: number;
    nombre: string;
    categorias: Categorias[];
}
export class Categorias {
    id: number;
    nombre: string;
    platos: People[];
}
export class Platos {
    id: number;
    ingredientes: string;
    nombre: string;
}
export class People {
    id: number;
    valor: number;
}
