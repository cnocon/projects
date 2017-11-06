import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import $ from 'jquery';

$.getJSON('http://localhost:3001/charts/', function(json){
	const data = {
		type:"bar", //bar, horizontalBar,line
		data:json[0],
		options:null
	};

	ReactDOM.render(<Chart {...data} />, document.getElementById("root"));

});












