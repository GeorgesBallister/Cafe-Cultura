var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://127.0.0.1:27017/
mongoose.connect('mongodb+srv://mkdbuser:R38lvnZotvGhz34G@cluster0.1f3ewdq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const cafeteriaRoute = require('./routes/cafeteria.route');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/cafeteria', cafeteriaRoute);
app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});