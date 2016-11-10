import { Component, OnInit } from '@angular/core';

import template from './nav.component.html';
import style from './nav.component.sass';
@Component({
    selector: 'navigation',
    template,
    styles: [style]
})
export class NavigationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}