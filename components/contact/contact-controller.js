angular.module("portfolioApp").controller("ContactCtrl",["$scope","$mdDialog","contactService",function(a,b,c){console.log("Contact controller"),a.sendMessage=function(){c.sendEmail(a.message).then(function(){console.log("Email sent successfully:",a.message)})}}]).factory("contactService",["$http","$q",function(a,b){return{sendEmail:function(c){var d=b.defer(),e="https://api.mailgun.net/v2/sandboxa59684366f4e47d3ad6786d9158ed7b1.mailgun.org/messages",f={method:"POST",url:e,data:{auth:"api:key-21477810cd64590bc6cfa18b969d5e56",from:"Mailgun Sandbox <postmaster@sandboxa59684366f4e47d3ad6786d9158ed7b1.mailgun.org>",to:"prescottprue@gmail.com",subject:"Site Message",text:c.email+" sent "+c.content}};return a(f).success(function(a,b){console.log("Email post successful:",a,b),d.resolve(a)}).error(function(a,b,c){console.error("Error with email post:",b,c),d.reject(b)}),d.promise}}}]);