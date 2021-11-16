const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    lastName : {
        type: String,
        required : true
    },

    numRides : {
        type: Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    university : {
        type : String,
        required : true
    },

    course : {
        type : String,
        required : true
    },

    instagram : {
        type : String,
        required : false
    },

    phoneNumber : {
        type : String,
        required : true
    },

    ranking : {
        type : Number,
        required : true
    }

});

module.exports = mongoose.model('User', userSchema);
