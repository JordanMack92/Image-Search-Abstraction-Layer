


var methods = {};

methods.pixabay = function(search){
  
  require("jsdom").env("", function(err, window) {
    if (err) throw err

    var $ = require("jquery")(window);
    var url = 'https://pixabay.com/api/?key=6024198-b891a26ae50627de5f5a0e197&q='+search+'&image_type=photo';
  
   $.getJSON(url, function(data){
    return data;
  });
});
  
  
  
}

module.exports = methods;