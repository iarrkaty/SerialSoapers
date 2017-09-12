'use strict';
const express = require('express');
const app = express();
app.use((req, res) => {
  res.statusCode = 200;
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res){
res.sendFile(__dirname + '/index.html');

});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App is running on port', port);
});
