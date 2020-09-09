import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

    transform(list: any[], filterText: string): any {
        // tslint:disable-next-line: max-line-length
        return list ? list.filter(item => item.nombre ? item.nombre.search(new RegExp(filterText, 'i')) > -1 : item.titulo.search(new RegExp(filterText, 'i')) > -1) : [];
    }

}
