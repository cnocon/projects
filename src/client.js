// importing external resources by using `import` directive, and specifying the class names and node package names for what you need. E.g. import ReactDom class from 'react-dom' module in node
import React from 'react';
import ReactDOM from 'react-dom';

// import your App class so it gets delivered to client; it's the path to the app file.
import App from './app';

// ReactDOM.render(component, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
