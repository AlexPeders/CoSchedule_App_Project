const noteRoutes = require('./note_routes');
const lyricApiRoutes = require('./lyricApiRoutes')

module.exports = function(app,db){
  noteRoutes(app, db);
  //other routes
  lyricApiRoutes(app, db);
};
