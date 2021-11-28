const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    },

    model : {
        type : String,
        requried : true
    },

    color : {
        type : String,
        required : true
    },

    licensePlate : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Car", carSchema);