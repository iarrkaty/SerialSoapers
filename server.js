'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express ();
const conString = 'postgres://postgres:1234@localhost:5432/lab10'; 
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res){
res.sendFile(__dirname + '/index.html');

});

app.use(express.static(__dirname + '/public'));
app.use('/public',express.static('public'))



const PORT = process.env.PORT || 3000;

app.post('.data', function (req, res) {
  req.on('data', function (data){
  console.log(data.toString());
  })
  req.on ('end', function() {
    res.send('data received!');
  })
})
