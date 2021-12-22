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

module.exports.testUpdate = async (app, req, res) => {

  const userModel = require('../models/user');
  const response = {
    testUpdate: false
  }

  await userModel.findOneAndUpdate({_id: req.body._id}, req.body.update);
  const user = await userModel.findOne({_id: req.body._id}).then(async (data) => {
    console.log(data);
    if(data){
      console.log(data);
      response.testUpdate = true;
      return
    }
  }).catch(error => console.log(error));

  res.send(response);
}

module.exports.testDelete = async (app, req, res) => {
  const userModel = require('../models/user');
  const response = {
    testDelete: false
  }
  await userModel.deleteOne({email: req.body.userEmail}).then(data => {
    console.log(data);
    if (data.deletedCount !== 0){
      response.testDelete = true;
      console.log(response);
    }
  });
  res.send(response);
}
