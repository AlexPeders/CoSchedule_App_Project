var ObjectID = require('mongodb').ObjectID;
module.exports = function(app,db){

  app.get('/songs/:id', (req, res)=>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    console.log(details)
    db.collection('songs').findOne(details, (err, item) => {
      if(err){
        res.send({'error':'An error has occured'});
      } else {
        res.send(item);
      }
    });
  });
  app.post('/songs',(req,res) => {
    //Create db object here
    const note = {artist: req.body.artist, title:req.body.song,
      lyrics:req.body.lyrics, comment:req.body.comment};
    db.collection('songs').insertOne(note, (err, result) => {
      if(err){
        res.send({'error': 'An error has occurred'});
      } else {res.send(result.ops[0]);}
    } );
  });
  app.delete('/songs/:id', (req, res)=>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('songs').remove(details, (err, item) => {
      if(err){
        res.send({'error':'An error has occured'});
      } else {
        res.send('Note '+ id + ' deleted!');
      }
    });
  });
  app.put('/songs/:id', (req, res)=>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const note = {artist: req.body.artist, title:req.body.song,
      lyrics:req.body.lyrics, comment:req.body.comment};
    db.collection('songs').updateOne(details,{$set: note}, {upsert: true})
    .then(result => {
      const {matchedCount, modifiedCount} = result;
      if(matchedCount && modifiedCount){
        res.send(note)
      } else {
        console.log(err)
        res.send({'error':'An error has occured'});
      }
    });
  });
};
