module.exports.getLogin= function(app, req, res){
    res.render('login');
}

module.exports.userLogin = async function(app, req, res){
    const userModel = require('../models/user');
    var bodyData = req.body;
    var users = await userModel.findOne(bodyData);

    try{
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}