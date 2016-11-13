import { Component, OnInit } from '@angular/core';

import template from './login.component.html';
import style from './login.component.sass';
@Component({

    selector: 'login',
    template,
    styles: [style]
})
export class LoginComponent implements OnInit {

    loginCred = {
        email: '',
        password: ''
    }

    constructor() {

    }

    labelControl(value) {
        console.log(value);
        if( value === '' || value.length < 1 ) {
            return false;
        } else {
            return true;
        }
    }

    ngOnInit() { }
}
