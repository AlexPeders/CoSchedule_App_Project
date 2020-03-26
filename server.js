const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const cors        = require('cors');
const app = express();
const db = require('./config/db')
// server.js
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
var mongoClient = new MongoClient(db.url, {useUnifiedTopology: true})
mongoClient.connect( (err, mongoClient)=> {
  if(err) return console.log(err)
  var db = mongoClient.db('FavoriteLyrics')//Need the database name here
  require('./apps/routes')(app, db)
  app.listen(port, ()=> { console.log('We are live on ' + port);});
})
