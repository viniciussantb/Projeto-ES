const mongoose = require('mongoose');
var password = 'ar94Ll8gm3WAt1ba'

const URI = "mongodb+srv://mongo:"+password+"@cluster-if977.u9rwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URI, opts, () => console.log('db connected...'));

module.exports = function(){
    return mongoose;
}


