'use strict';
const express = require('express');
const app = express();
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App is running on port', port);
});
