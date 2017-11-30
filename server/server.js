var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var food = require('./routes/food');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/food', food);

app.listen(port, function () {
    console.log('server is listening on port', port);
});