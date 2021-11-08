const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userEmail: String,
    title: String,
    description: String,
    done: Boolean,
    reminder: Boolean
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
