var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var morgan = require('morgan');

var aboutRouter = require('./aboutRoute/aboutRoute');
var app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/aboutRoute", aboutRouter);

mongoose.connect('mongodb://localhost/aboutRoute', function() {
  console.log("Connected to the DataBase !")
    
});

app.listen(8000, function(){
    console.log("you are listening on Port 8000")
    
});


