var mongo = require('mongodb').MongoClient;
var url = "mongodb://jordan:mack@ds149551.mlab.com:49551/fcc-backend";

var methods = {};

methods.insert = function(search){
  mongo.connect(url, function(err, db){
    //if (err) throw err
    db.collection('search-history').insert( {"term": search, "when": new Date() }  );
    db.close();
  });
};

module.exports = methods;
