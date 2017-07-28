var https = require('https');


var methods = {};

methods.pixabay = function(search){
  
  var url = 'https://pixabay.com/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo';
  var optionsget = {
    host : 'pixabay.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
  
  var getRequest = https.request(optionsget, function(res){
    res.on('data', function(data){
      return data;
    });
  });
  
  getRequest.end();
  
  
  
//   require("jsdom").env("", function(err, window) {
//     if (err) throw err

//     var $ = require("jquery")(window);
//     var url = 'https://pixabay.com/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo';
  
//    $.getJSON(url, function(data){
//     return data;
//   });
};
  
  
  


module.exports = methods;