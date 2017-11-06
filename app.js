const express = require('express');
const cors = require('cors')
const mongojs = require('mongojs');
let chartData = '';
require('dotenv').config();
const app = express();
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
app.use(cors())

// Connection URL
var url = process.env.DB_URI;


app.get('/charts/', function (req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to MongoDB server");
    var collection = db.collection('charts');

    collection.find().toArray(function(err, docs) {
      assert.equal(err, null);
      res.json(docs);
      db.close();
    });
  });
});

app.listen(3001, function(){
  console.log('CORS-enabled web server listening on port 3001');
});
