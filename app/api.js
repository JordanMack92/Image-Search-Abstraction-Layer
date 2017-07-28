var https = require('https');
var bl = require('bl');


var methods = {};

methods.pixabay = function(search){
  
  var path = '/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo'
  var url = 'https://pixabay.com/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo';
  var optionsget = {
    host : 'pixabay.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : path, // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
  
  https.request(optionsget, function(res){
    
    res.pipe(bl(function (err, data){
      
        if(err){console.log(err);}
        data = data.toString();
        console.log(data);
      
    }));
    // res.on('data', function(data){
    //   console.log(data);
    // });
  }).end();
  
  
  
//   require("jsdom").env("", function(err, window) {
//     if (err) throw err

//     var $ = require("jquery")(window);
//     var url = 'https://pixabay.com/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo';
  
//    $.getJSON(url, function(data){
//     return data;
//   });
};
  
  
  


module.exports = methods;