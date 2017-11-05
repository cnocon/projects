// because we're not using webpack or babel we can't use import or any es6 stuff;
const express = require('express');
const mongojs = require('mongojs');

// start up our express application
const app = express();

// set up our database/make a call/connection to our db, with a list of collections we will work with
const db = mongojs('ChartsDB', ['charts']);

// logic to render out our db item
// path where you can gain access to our chart; it's .json bc it's a json element in the db; that's how mongo works
// ...now he's saying he can use es6 for this part; i'm not sure why, but we're using an arrow function here for the callback with a request and response object
app.get('/chart.json', (request, response) => {
  // command to find document
  db.charts.find(
    {_id: mongojs.ObjectId("59ff6a04d793241f99f94ba1")},
    (error, responseObj) => {
      if (error) {
        response.sendStatus(404);
      } else {
        // this allows us to control who gains access to our server and in what way
        // because our server is in a separate place (runs in 3001) than our client (runs in 3000), via 2 different servers. This ALLOWS ANYBODY TO GAIN ACCESS TO OUR SERVERS WHICH IS A TERRIBLE IDEA BUT SUITABLE JUST FOR NOW FOR TESTING
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "X-Requested-With");
        // use response to send back our object,
        response.send(JSON.stringify(responseObj[0]));
        // basically we're lisetening to port 3001; when user tries to get something from chartjs, we search for chart we want. if response that comes back isn't an error, we allow access to anybody and then send out that information, so that whoever loads this us is allowed to manipulate the data they're fetching.
      }
    }
  );
});



// ObjectId("59ff6a04d793241f99f94ba1")

// every single express app has to have the app.listen
app.listen(3001, function () {
  console.log('we are running on port 3001');
});


