import { Component, OnInit } from '@angular/core';

import template from './login.component.html';
import style from './login.component.sass';
@Component({
    
    selector: 'login',
    template,
    styles: [style]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}