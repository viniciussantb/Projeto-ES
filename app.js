var app = require('./config/server');
var port = 8080;

var mongoDB = require('./config/dbConn');

app.listen(port, function(){
    console.log('server listening on port ' + port);
});
