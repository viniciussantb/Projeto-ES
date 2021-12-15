const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    university : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true
    },

    time : {
        type : String,
        required : true
    },

    meetingLocation : {
        type : String,
        required : true
    },

    endLocation : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    vagas : {
        type : Number,
        required : true
    }


});

module.exports = mongoose.model('Ride', rideSchema);