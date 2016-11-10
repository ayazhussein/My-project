import { Component, OnInit, OnDestroy } from '@angular/core';
import { Device } from '../../../../both/models/device.model';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import template from './home.component.html';
import style from './home.component.sass';
@Component({
    selector: 'home',
    template,
    styles: [style]
})
export class HomeComponent implements OnInit, OnDestroy {

    devices : Device[];
    deviceSub: Subscription
    constructor(private mainService: MainService) { }

    Unsubscribe(){
        this.mainService.unsubscribeDevices();
    }
    ngOnInit() { 
        this.mainService.subscribeDevices();
        this.deviceSub = this.mainService.getDevices().subscribe(devices => {
            this.devices = devices;
        })
    }
    ngOnDestroy() {
        this.deviceSub.unsubscribe();
        this.mainService.unsubscribeDevices();
    }
}