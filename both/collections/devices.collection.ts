import { MongoObservable } from 'meteor-rxjs';
import { Device } from '../models/device.model';

export const Devices = new MongoObservable.Collection<Device>('devices');
