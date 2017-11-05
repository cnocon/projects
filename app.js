const express = require('express');
const mongojs = require('mongojs');
let chartData = '';
require('dotenv').config();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = process.env.DB_URI;

var findDocuments = function(db, callback) {
  var collection = db.collection('charts');
  collection.find().toArray(function(err, docs) {
    assert.equal(err, null);
    chartData = JSON.stringify(docs);
    callback(docs);
  });
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  findDocuments(db, function(){
    db.close();
  });
});

const app = express();

app.get('/chart.json',(request,response) => {
  response.send(chartData);
});


app.listen(3001, function(){
  console.log("we are running on prot 3001!");
});
