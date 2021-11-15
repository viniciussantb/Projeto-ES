module.exports.getLogin= function(app, req, res){
    res.json({msg: 'get login'});
}

module.exports.userLogin = async function(app, req, res){
    const userModel = require('../models/user');
    var bodyData = req.body;
    console.log(bodyData);
    var users = await userModel.findOne(bodyData);

    try{
        if(users){
            res.send(users);
        }else{
            res.send('No user founded');
        }

    } catch (error) {
        res.status(500).send(error);
    }
}