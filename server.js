
'use strict';
var express = require('express');
const cors = require('cors')


var port = 3010;
var app = express();
var compression = require('compression')
app.use(compression())




app.use('/', express.static(__dirname + '/dist'));

app.set('port', (process.env.PORT || port));
if (process.env.ENV_NAME === 'Dev') {
    console.log(process.env.ENV_NAME);

    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://localhost:6485'],
        credentials: false
    };
    app.use(cors(corsOptions));
}
app.get('/api/server', (req, res) => {
    return res.send(process.env.SOCKET_URL)
})






app.listen(app.get('port'), function () {
    console.log('Server running on port: ' + app.get('port'));
});
