var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// Middleware executes everytime you refresh your page it has access to your req and res objects
/*
var logger = function(req, res, next) {
    console.log('logging...');
    next();
}

app.use(logger);
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('welcome to');
});

app.listen(3000, function() {
    console.log(`Server started on port 3000...`);
}); 