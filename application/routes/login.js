module.exports = function(app){
    app.get('/login', function(req, res){
        app.application.controllers.login.getLogin(app, req, res);
    });
};