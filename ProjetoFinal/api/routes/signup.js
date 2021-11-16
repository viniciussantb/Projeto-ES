module.exports = function(app){
    app.get('/signup', function(req, res){
        app.controllers.signup.getSignup(app, req, res);
    });

    app.post('/signup', function(req, res){
        app.controllers.signup.saveSignup(app, req, res);
    })
};