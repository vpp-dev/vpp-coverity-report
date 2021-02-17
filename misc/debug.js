console.log("Hello from phantomjs");
var fs = require('fs');
var page = require('webpage').create();
console.log("fs and page created");


setTimeout(function() {
             console.log("Timeout on phantomjs, exiting");
             phantom.exit();
       }, 1000);

page.open("https://scan.coverity.com/users/sign_in", function(st) {
  console.log("Status: " + st);
});

