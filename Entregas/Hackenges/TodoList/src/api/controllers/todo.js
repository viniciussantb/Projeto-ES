module.exports.gettodos = (app, req, res)=>{
    const todoModel = require('../models/todo');
    const email = req.body.email;

    todoModel.find({userEmail : email}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("internal error. sorry...")});
}

module.exports.saveTodo = (app, req, res)=>{
     
    const todoModel = require('../models/todo');

    const {title, description, done, reminder, userEmail} = req.body;
    const bodyDataModel = {
        title: title,
        description : description,
        done: done,
        reminder: reminder,
        userEmail: userEmail
    }

    const todo = new todoModel(bodyDataModel);

    todo.save().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("internal error. sorry...")
    });
}

module.exports.deleteTodo = (app, req, res) => {
    const ObjectId = require('mongoose').Types.ObjectId;
    const todoModel = require('../models/todo');
    const query = {_id: ObjectId(req.body._id)}
    todoModel.deleteOne(query, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.status(200).json(result);
    });
}
