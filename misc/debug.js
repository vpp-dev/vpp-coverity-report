console.log("Hello from phantomjs");
var fs = require('fs');
var page = require('webpage').create();
console.log("fs and page created");


setTimeout(function() {
             console.log("Timeout on phantomjs, exiting");
             phantom.exit();
       }, 30000);


function do_login(page) {
      page.evaluate(function() {
        document.getElementById('user_email').value = "REPORT_LOGIN_USER";
        document.getElementById('user_password').value = "REPORT_LOGIN_PASS";
        document.getElementsByName('commit')[0].click();
      });
      console.log("Logging in..");
}

setTimeout(function() {
          page.open("https://scan.coverity.com/users/sign_in", function(st) {
             console.log("Status: " + st);
             if (st === "success") {
               do_login(page);
	       setTimeout(function() {
		       new_url = "https://scan.coverity.com/projects/fd-io-vpp/view_defects";
                       page.open(new_url, function(status) {
                            console.log("Second stage status: " + status);
                            if(status === "success") {
                                 new_url = "https://scan9.coverity.com/api/viewContents/issues/v1/28863?projectId=12999&rowCount=-1";
                                 page.open(new_url, function(status) {
                                     console.log("Third stage status: " + status);
                                     if(status === "success") {
                                         data = page.evaluate(function() {
                                             return document.body.innerText;
                                         });
                                         fs.write("/tmp/report.json", data, "w");
                                         console.log("All done!");
                                         phantom.exit();
                                     }
                                 });
                            }
                       });
	       }, 15000);
	     }
          });
       }, 500);

