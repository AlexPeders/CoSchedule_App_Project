const express     = require('express');
const MongoClient = require('mongodb', {useUnifiedTopology: true}).MongoClient;
const bodyParser  = require('body-parser');

const app = express();
const db = require('./config/db')
// server.js
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database)=> {
  if(err) return console.log(err)
  var db = database.db('FavoriteLyrics')//Need the database name here
  require('./apps/routes')(app, db)
  app.listen(port, ()=> { console.log('We are live on ' + port);});
})
