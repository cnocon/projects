import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import homicides from "../data/csv-homicides_2014.csv";
import {a2c} from './utils/chartDataFormatter';

const data = a2c(homicides);

ReactDOM.render(<App {...data} />, document.getElementById('root'));
