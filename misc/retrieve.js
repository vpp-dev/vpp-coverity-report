console.log("Retrieval begins");

var fs = require('fs');

setTimeout(function() {
              console.log("Timeout on phantomjs, exiting");
              phantom.exit();
           }, 300000);

var page = require('webpage').create();

function do_login(page) {
      page.evaluate(function() {
        document.getElementById('user_email').value = "REPORT_LOGIN_USER";
        document.getElementById('user_password').value = "REPORT_LOGIN_PASS";
        document.getElementsByName('commit')[0].click();
      });
      console.log("Logging in..");
}

page.onLoadStarted = function() {
   console.log("Load started");
   let x = page.evaluate(function() {
     return document.location.href 
   });
   console.log("Starting " + x);
   
}

page.onLoadFinished = function() {
   console.log("Load finished");
   let x = page.evaluate(function() {
     return document.location.href 
   });
   console.log("Finished " + x);
   if (x == "https://scan9.coverity.com/reports.htm#v42724/p12999") {
      new_url = "https://scan9.coverity.com/api/viewContents/issues/v1/28863?projectId=12999&rowCount=-1";
      page.open(new_url, function(status) {
         console.log("Third stage status: " + status);
         if(status === "success") {
            data = page.evaluate(function() {
               return document.body.innerText;
            });
            fs.write("/tmp/report.csv", data, "w");
            console.log("All done!");
            phantom.exit();
         }
      });
   }
   if (x == "https://scan.coverity.com/dashboard") {
      new_url = "https://scan.coverity.com/projects/fd-io-vpp/view_defects";
      page.open(new_url, function(status) {
         console.log("Second stage status: " + status);
         if(status === "success") {
            page.render('example.png');
         }
      });
   }

   console.log("Finished processing " + x);
}

page.open("https://scan.coverity.com/users/sign_in", function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    do_login(page);
  }
});


