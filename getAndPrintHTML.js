//require modules. We dont need the fs module quite yet
//const fs = require('fs');
const https = require('https');

function getAndPrintHTML () {

  //the host domain name and path
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  //The get method send out the requestOptions and then handles the response
  https.get(requestOptions, function (response) {

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
      console.log(buf);
      console.log('Response from stream complete');
    });
  });
}


getAndPrintHTML();