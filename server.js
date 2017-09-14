'use strict';
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

const soaps = require('./assets/scripts/soaps.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// makes all images and scripts accessible just by their names

app.use(express.static(__dirname + '/assets'));


app.get('/about', function (req, res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/faq', function (req, res){
  res.sendFile(__dirname + '/faq.html');
});


app.get('/products', function (req, res){
  res.sendFile(__dirname + '/products.html');
});

app.post('/products', function (req, res) {
  const search = req.body.search
  const filteredSoaps = soaps.filter(({scent}) => scent === search.toLowerCase());
  console.log(filteredSoaps);

  // then respond with JSON
  res.json({data:filteredSoaps})
})

app.get('/locations', function (req, res){
  res.sendFile(__dirname + '/locations.html');
});

app.get('*', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log('App is running on port', port);
});
