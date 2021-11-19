module.exports.getSignup = function(app, req, res){
    res.json({msg: 'get signup'});
}

module.exports.saveSignup = function(app, req, res){
    console.log(req.body);
    const userSchema = require('../models/user');

    const user = userSchema(req.body);
    user.save().then((data) => {
        console.log(data);
        res.redirect('/login');
    }).catch((err) => {
        console.log(err);
    })
}
