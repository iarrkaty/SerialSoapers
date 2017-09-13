'use strict';
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// makes all images and scripts accessible just by there names
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/scripts'));


app.get('/about', function (req, res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/faq', function (req, res){
  res.sendFile(__dirname + '/faq.html');
});

app.get('/products', function (req, res){
  res.sendFile(__dirname + '/products.html');
});

app.get('/locations', function (req, res){
  res.sendFile(__dirname + '/locations.html');
});

// Keep star route at the bottom for catch all
app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, function () {
  console.log('App is running on port', port);
});
