console.log("Hello from phantomjs");
var fs = require('fs');
var page = require('webpage').create();
console.log("fs and page created");


setTimeout(function() {
             console.log("Timeout on phantomjs, exiting");
             phantom.exit();
       }, 1000);

page.open("http://stdio.be/", function(st) {
  console.log("Status: " + st);
});

