import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { Devices } from '../../../../both/collections/devices.collection';

@Injectable()
export class MainService {

    deviceSub: Subscription;

    constructor() { }

    subscribeDevices() {
        return this.deviceSub = MeteorObservable.subscribe('devices').subscribe(() => {
            console.log('subscribed');
        })
    }
    unsubscribeDevices() {
        this.deviceSub.unsubscribe();
    }

    getDevices() {
        return Devices.find().zone();
    }
}