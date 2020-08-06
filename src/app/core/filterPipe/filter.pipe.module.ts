import { NgModule } from '@angular/core';


import { ListFilterPipe } from './filter.pipe'; // <---

@NgModule({
    declarations: [ListFilterPipe], // <---

    exports: [ListFilterPipe] // <---
})

export class MainPipe { }
