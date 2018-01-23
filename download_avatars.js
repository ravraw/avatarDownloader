var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: `https://api.github.com/repos/${repoOwner}/jquery/${repoName}`,
    headers: {
      'User-agent': 'request',
    }

  }

  var url = `https://api.github.com/repos/${repoOwner}/jquery/${repoName}`;
  request(url ,function(err, res, body){
    cb(err, body);
  })

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});