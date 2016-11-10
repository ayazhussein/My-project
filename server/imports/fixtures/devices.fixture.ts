import { Devices } from '../../../both/collections/devices.collection';
import { Device } from '../../../both/models/device.model';

export function loadDevices() {
    if (Devices.find().fetch().length < 1) {
        for( var i = 0; i < 5 ; i++ ) {
            Devices.insert({
                name: 'Device' + (i+1)
            });
        }
    }
}