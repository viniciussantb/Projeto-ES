module.exports.todo = (app, req, res)=>{
    /*if(!req.session.authorized){
       res.status(401).send({data: "É necessário a realização do login"});
       return
    }*/
    const todoModel = require('../models/todo');
    const todo = new todoModel();
    const email = req.session.email;

    console.log(req.session);

    // const email = req.session.email;

    todoModel.find({userEmail : email}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("internal error. sorry...")});
}

module.exports.saveTodo = (app, req, res)=>{
    /*if(!req.session.authorized){
        res.status(401).send({data: "É necessário a realização do login"});
        return
     }*/
     
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
