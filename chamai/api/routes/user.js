module.exports = function(app){
  app.post('/user', function(req, res){
      app.controllers.user.getUser(app, req, res);
  });
};