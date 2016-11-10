import { Meteor } from 'meteor/meteor';
import './imports/publications/devices';
import {loadDevices} from  './imports/fixtures/devices.fixture';

Meteor.startup( () => {
    loadDevices();
})