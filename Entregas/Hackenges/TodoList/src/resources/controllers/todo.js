module.exports.todo = (app, req, res)=>{
    if(!req.session.authorized){
       res.status(401).send({data: "É necessário a realização do login"});
       return
    }
    console.log(req.session)
    const todoModel = require('../models/todo');
    const todo = new todoModel();

    const email = req.session.email;

    todoModel.find({userEmail : email}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("internal error. sorry...")});

}

module.exports.saveTodo = (app, req, res)=>{
    const todoModel = require('../models/todo');
    const todo = new todoModel(req.body);

    todo.save().then((data)=>{
        console.log(data);
        res.send({data: data});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("internal error. sorry...")
    });

}
