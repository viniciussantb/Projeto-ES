module.exports = (app)=>{
    app.get('/', (req, res) => {
        app.controllers.login.login(app, req, res);
    })

    app.post('/', (req, res) => {
        app.controllers.login.userLogin(app, req, res);
    })
};