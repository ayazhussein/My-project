import { Component, OnInit } from '@angular/core';

import template from './register.component.html';
import style from './register.component.sass';
@Component({
    selector: 'register',
    template,
    styles:[style]
})
export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}