module.exports = function(app){
    app.get('/login', function(req, res){
        app.application.controllers.login.getLogin(app, req, res);
    });

    app.post('/user_login', function(req, res){
        app.application.controllers.login.userLogin(app, req, res);
    })
};