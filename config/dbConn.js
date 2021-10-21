var mongoose = require('mongoose');

const URI = "mongodb+srv://mongo:ar94Ll8gm3WAt1ba@cluster-if977.u9rwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () =>{
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    await mongoose.connect(URI, opts);
    console.log('db connected...');
}

module.exports = connectDB;
