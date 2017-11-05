import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
// import array2chart from './utils/array2chart';
import $ from 'jquery';

$.getJSON('http://localhost:3001/chart.json', function(json) {
  const data = {
    type: "radar",
    data: json,
    options: {}
  };

  ReactDOM.render(<Chart {...data} />, document.getElementById('root'));
});
