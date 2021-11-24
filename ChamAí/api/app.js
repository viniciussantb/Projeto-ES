var app = require('./config/server');
var port = 8080;

app.listen(port, function(){
    console.log('server listening on port ' + port);
});

