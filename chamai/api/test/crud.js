module.exports.testCR = async(app, req, res) => {
  const response = {
      create: false,
      read: false,
  };
  const userModel = require('../models/user');
  let _id = null;

  let user = userModel(req.body);
  await user.save().then((data) => {
      console.log(data);
      _id = data._id;
      response.create = true;

  }).catch((err) => {
      console.log(err);
      res.send(response);
      return
  });

  user = await userModel.findOne({_id: _id}).then(async (data) => {
    if(user){
      response.read = true;
    }
  }).catch(error => console.log(error));

  res.send(response);
}
