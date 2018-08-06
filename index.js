const request = require('request');

const username = process.env.BITBUCKET_USER;
const password = process.env.BITBUCKET_APP_PASSWORD;
const team = process.env.BITBUCKET_TEAM;
const baseUrl = 'https://' + username + ':' + password + '@api.bitbucket.org/2.0';

const options = {
  url: `${baseUrl}/repositories/${team}`
}

request(options, (err, res, body) => {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
});