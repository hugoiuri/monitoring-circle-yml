const request = require('request');

const username = process.env.BITBUCKET_USER;
const password = process.env.BITBUCKET_APP_PASSWORD;
const team = process.env.BITBUCKET_TEAM;
const auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

const baseUrl = 'https://api.bitbucket.org/2.0';

const options = {
  url: `${baseUrl}/repositories/${team}`,
  headers: {
    Authorization: auth,
    'Content-Type': 'application/json'
  }
}

request(options, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    const data = JSON.parse(res.body)
    data.values.forEach(repo => {
      console.log(repo.name)
    });
  }
});


