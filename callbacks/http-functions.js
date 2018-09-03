const https = require('https');

module.exports = function getHTML (options, callback) {

  //The get method recieves and sends out the options and then handles the response
  https.get(options, function (response) {

    //set encoding
    response.setEncoding('utf-8');

    //initialize a buffer
    let buf = [];

    //the callback is invoked when the data data is recieved
    response.on('data', function (data) {
      buf += data;
    });

    //When all of the info has been recieved
    response.on('end', function() {
      callback(buf);
    });
  });

}

function printHTML (html) {
  console.log(html);
}