module.exports.getLogin= function(app, req, res){
    res.json({msg: 'get login'});
}

module.exports.userLogin = async function(app, req, res){
    const userModel = require('../models/user');
    console.log(req.body);
    const {email, password} = req.body;

    var user = await userModel.findOne({email: email, password: password});

    try{
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({msg: 'No user found'});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}