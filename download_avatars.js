var request = require('request');
var token = require('./secrets.js')

console.log('Welcome to the GitHub Avatar Downloader!');



function getRepoContributors(repoOwner, repoName, cb) {

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


getRepoContributors("jquery", "jquery", function(err, result) {

  console.log("Errors:", err);
  result.forEach((item)=>{
    console.log(item.avatar_url) ;
  });
});