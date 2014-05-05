
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var port = 8090;
var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

//use body body-parser
app.use(bodyParser());
		

/* Express Router */
var router = express.Router();

/* Models */
var studentModel = require('./app/models/Student')




require('./app/route/routes.js')(app, router, studentModel);

/* Register the routes */
app.use('/api', router);

app.listen(port);
console.log("Port listening on 8090 for restful api services!");