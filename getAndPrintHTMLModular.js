//require functions
const https = require('https');

function getAndPrintHTML (options) {

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
      console.log(buf);
      console.log('Response from stream complete');
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);