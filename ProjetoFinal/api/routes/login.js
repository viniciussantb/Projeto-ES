module.exports = function(app){
    app.get('/login', function(req, res){
        app.controllers.login.getLogin(app, req, res);
    });

    app.post('/login', function(req, res){
        app.controllers.login.userLogin(app, req, res);
    })
};