import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import homicides from "../data/homicide-per-100000-2004-2015.csv";
import homicides from "../data/csv-homicides_2014.csv";
import {barData, a2c} from './utils/chartDataFormatter';

// const data = barData(homicides);
const data = a2c(homicides);

ReactDOM.render(<App {...data} />, document.getElementById('root'));
