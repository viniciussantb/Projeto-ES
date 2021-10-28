module.exports = function(app){
    app.get('/signup', function(req, res){
        app.application.controllers.signup.getSignup(app, req, res);
    });

    app.post('/save_signup', function(req, res){
        app.application.controllers.signup.saveSignup(app, req, res);
    })
};