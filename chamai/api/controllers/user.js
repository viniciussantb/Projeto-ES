module.exports.getUser = async function(app, req, res){
  const userModel = require('../models/user');
  console.log(req.body);
  const {email} = req.body;

  var users = await userModel.findOne({email: email});

  try{
      console.log(users);
      if(users){
          res.status(200).json(users);
      }else{
          res.status(404).json({msg: 'No user found'});
      }

  } catch (error) {
      res.status(500).send(error);
  }
}