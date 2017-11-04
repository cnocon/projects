import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';
import App from './components/app';

ReactDOM.render(
  <App {...data} />,
  document.getElementById('root')
);

