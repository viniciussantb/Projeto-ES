module.exports.gettodos = (app, req, res)=>{
    const todoModel = require('../models/todo');
    const email = req.body.email;

    todoModel.find({userEmail : email}).then((data)=>{
        console.log(data);
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
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("internal error. sorry...")
    });

}
