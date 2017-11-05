import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import $ from 'jquery';

$.getJSON('http://localhost:3001/chart.json', function(json){
  console.log(json);
});


const data = {
  type: "bar",
  data: array2chart(rawData),
  options: {
    responsive: true,
    title:{
      display: true,
      text: 'About Some People'
    },
    hover: {
      mode: 'label'
    },
    tooltips: {
      mode: 'label'
    }
  }
}

ReactDOM.render(<Chart {...data} />, document.getElementById('root'));
