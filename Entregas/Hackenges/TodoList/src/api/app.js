const app = require('./config/server');
const port = 8080

app.listen(port, () => console.log('server connected on port ' + port));