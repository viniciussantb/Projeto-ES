const mongoose = require('mongoose');
const passengerSchema = new mongoose.Schema({
    id_ride : {
        type : Object,
        required : true
    },

    userEmail : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Passenger', passengerSchema);