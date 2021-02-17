console.log("Hello from phantomjs");

setTimeout(function() {
             console.log("Timeout on phantomjs, exiting");
             phantom.exit();
       }, 1000);

