module.exports = (app)=>{
    app.get('/signup', (req, res) => {
        app.controllers.signup.signup(app, req, res);
    });

    app.post('/signup', (req, res) => {
        app.controllers.signup.saveSignup(app, req, res);
    })
}