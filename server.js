'use strict';
const express = require('express');
const app = express();
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.get('/', function (req, res){
  res.sendFile('/index.html');
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App is running on port', port);
});
