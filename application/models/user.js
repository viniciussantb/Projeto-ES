const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    login : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
});

console.log(mongoose);

module.exports = mongoose.model('User', userSchema);
