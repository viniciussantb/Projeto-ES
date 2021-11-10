module.exports.login = (app, req, res) => {
    res.send({data: 'Hello World...'});
}

module.exports.userLogin = (app, req, res) => {
    const userModel = require('../models/users');

    const {email, password} = req.body;

    const user = userModel.findOne({email: email, password: password}).then((data)=>{
        if(!data){
            res.status(400).send({msg: "Usuário não encontrado"})
        }else{
            const {email, password} = data;
            req.session.email = email;
            req.session.authorized = true;
            console.log(req.session);
            res.status(200).redirect('/todo');
        }}).catch((err)=>{
            console.log(err);
        });
}
