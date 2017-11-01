// importing external resources by using `import` directive, and specifying the class names and node package names for what you need. E.g. import ReactDom class from 'react-dom' module in node
import React from 'react';
import ReactDOM from 'react-dom';

const component = <div className="jumbotron jumbotron-fluid text-sm-center">
  <div className="container">
      <h1>Building React User Interfaces with Bootstrap and SASS</h1>
      <p></p>
      <p><a className="btn btn-primary" href="http://02geek.com" target="_blank">Discover Things</a></p>
    </div>
  </div>;

ReactDOM.render(component, document.getElementById('root'));
