const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true
    },

    userEmailReviewed : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    rating : {
        type : Number,
        min : [0, 'Must be at least 0, got {VALUE}'],
        max : [5, 'Must be up to 5, got {VALUE}'],
        required : true
    }
});

module.exports = mongoose.model('review', reviewSchema);