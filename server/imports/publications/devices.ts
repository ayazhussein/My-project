import { Meteor } from 'meteor/meteor';
import { Devices } from '../../../both/collections/devices.collection';


Meteor.publish( 'devices', function() {
    return Devices.find();
})