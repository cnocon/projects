import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import rawData from '../data/data.csv';
// when you don't have a default, you need to put it in a curly bracket
import {array2chart} from './utils/array2chart';

const data = {
  type: "bar",
  data: array2chart(rawData),
  options: {}
}

ReactDOM.render(<Chart {...data} />, document.getElementById('root'));
