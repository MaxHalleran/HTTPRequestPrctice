//Initializing https outside the function to ensure it doesnt change
const https = require('https');

//The overall function used
function getAndPrintHTMLChunks () {

  //The host/ domain name and the path to the resource that we want to read.
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // uses the host name and the path to find the response which it passes to its inner function as an entire parameter
  https.get(requestOptions, function (response) {

    //set encoding
    response.setEncoding('utf-8');

    //when a data chunk is recieved, this is what we do with it
    response.on('data', function(data) {
      console.log(data + '\n');
    })

    //The callback that is invoked when the process ends
    response.on('end', function() {
      console.log('Response from stream complete.');
    })
  })

}

getAndPrintHTMLChunks();