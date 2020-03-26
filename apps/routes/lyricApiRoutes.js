//var request = require('request');
const fetch = require('node-fetch');

module.exports = function(app,db){
  app.put('/lyric', (req, res)=>{
    //console.log(req)
    const url = 'https://api.lyrics.ovh/v1/' //'http://dnd5eapi.co/api/';
    const artist = req.body.artist;
    const title = req.body.song;
    //console.log(req.headers);
    console.log(req.body)
 //Mongo database not accessed here
      fetch(`${url}${artist}/${title}`)
      .then(response=>response.json())
      .then(data=>{
        res.send(data)
      })
  })
}
