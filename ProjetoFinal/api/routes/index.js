module.exports = function(app){
    app.get('/', function(req, res){
        app.controllers.index.getIndex(app, req, res);
    });
};