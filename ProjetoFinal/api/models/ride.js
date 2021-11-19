const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true
    },

    meetingLocation : {
        type : Object,
        required : true
    },

    endLocation : {
        type : Object,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    description : {
        type: String,
        required: false
    }


});

module.exports = mongoose.model('Ride', rideSchema);