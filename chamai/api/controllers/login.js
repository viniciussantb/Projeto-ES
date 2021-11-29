module.exports.getLogin= function(app, req, res){
    res.json({msg: 'get login'});
}

module.exports.userLogin = async function(app, req, res){
    const userModel = require('../models/user');
    console.log(req.body);
    const {email, password} = req.body;

    var users = await userModel.findOne({email: email, password: password});

    try{
        if(users){
            res.json(users);
        }else{
            res.json({msg: 'No user founded'});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}