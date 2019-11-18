const request = require('request');
const express = require('express');
const app = express();

const limeApi = require('./utils/lime')
const birdApi = require('./utils/bird')

const port = 4000;
const env = 'dev';

app.get('/lime', limeApi.getScooters);
app.get('/bird', birdApi.getScooters);

app.listen(port, () => {
  console.info(`Server started on port ${port} (${env})`); 
});


console.log('Express app started on port ' + port);
