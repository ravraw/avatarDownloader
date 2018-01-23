var myArg = process.argv.slice(2);
var repoOwner = myArg[2];
var repoName = myArg[3];
var request = require('request');
var token = require('./secrets.js');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');



function getRepoContributors(repoOwner, repoName, cb) {

  if(repoName === false || repoName === false){
    throw error ;

  }

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': token.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
      var result = JSON.parse(body);
    cb(err, result);
  });


}


function downloadImageByUrl(url, filePath){

  request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ' + response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath))
}





getRepoContributors(repoOwner, repoName, function(err, result) {

  console.log("Errors:", err);
  result.forEach((item)=>{
    var url = item.avatar_url ;
    var filePath = `img/(${item.login}).jpg`;
    downloadImageByUrl(url,filePath);
  });
});

