import {Component} from "angular2/core";
import {ItemComponent} from './list-items.component';

@Component({
    selector: 'my-app',
    template: `<my-list></my-list>`,
    directives:[ItemComponent]
})
export class MyTemplate {}
