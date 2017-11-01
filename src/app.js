
// a lot of code REALLY shouldn't live within the client file. Isomorphic javascript/coding - you want to create the most minimal code that you can in each file. Therefore we only want client specific things in client.js. For our application, we should create an app.js file and put app related code there.
import React from 'react';

// use export directive to say that you want this content to get packed up and sent as content
// by adding `default` we are saying that we want to send them the App class by default;
export default class App extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-sm-center">
        <div className="container">
          <h1>Building React User Interfaces with Bootstrap and SASS</h1>
          <p></p>
          <p><a className="btn btn-primary" href="http://02geek.com" target="_blank">Discover Things</a></p>
        </div>
      </div>
    );
  }
}
