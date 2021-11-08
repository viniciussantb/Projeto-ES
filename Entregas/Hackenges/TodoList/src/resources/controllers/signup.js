module.exports.signup = (app, req, res) => {
    res.send({data: "Hello World SignUP page..."})
}

module.exports.saveSignup = (app, req, res) => {
    const userModel = require('../models/users');
    const user = new userModel(req.body);

    user.save().then((data)=> {
        console.log(data);
        res.send({data : data})
    })
        .catch((err)=> console.log(err))
}
