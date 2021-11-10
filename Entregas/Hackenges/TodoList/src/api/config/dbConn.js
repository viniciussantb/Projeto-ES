const mongoose = require('mongoose');

const URI = "mongodb+srv://root:root@if977cluster.u9rwo.mongodb.net/todoList?retryWrites=true&w=majority";
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connection = mongoose.connect(URI, opts)
    .then(()=>console.log("db connected..."))
    .catch((err)=>console.log(err));

module.exports = connection;
