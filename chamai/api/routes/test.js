module.exports = function(app){
  app.post('/testCrud', function(req, res){
      app.test.crud.testCR(app, req, res);
  });

  app.put('/testCrud', function(req, res){
    app.test.crud.testUpdate(app, req, res);
  });

  app.delete('/testCrud', function(req, res){
    app.test.crud.testDelete(app, req, res);
  });
};