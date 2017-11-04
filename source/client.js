import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import data2 from '../data/data.csv';

let obj = data2.shift(),
  formattedData = {labels: [obj.name], datasets:[]},
  map = new Map(); //this is an ES6 feature
delete obj.name;
for(var item in obj) {
  let ds = {label: item, data: [obj.item]};
  formattedData.datasets.push(ds);
  map[item] = ds;
};

data2.forEach((obj, i, a) => {
  formattedData.labels.push(obj.name);
  delete obj.name;
  for(let item in obj) {
    map[item].data.push(obj[item]);
  }
});

const data = {
  type: 'bar',
  data: formattedData,
  options: {}
};

ReactDOM.render(<Chart {...data} />, document.getElementById('root'));


// old data:
// const oldData = {
//   type: 'bar',
//   data: {
//     labels: ["Ben", "James", "Marry", "Sam", "Gloria"],
//     datasets: [{
//       label: 'Fun',
//       data:[80,40,21,44,94],
//       backgroundColor: "rgba(255,0,0,0.2)",
//       borderColor: 'red',
//       borderWidth:1
//     }, {
//       label: 'Smart',
//       data:[90,30,90,90,100],
//       backgroundColor: "rgba(0,0,255,0.2)",
//       borderColor: "blue",
//       borderWidth:1
//     }]
//   },
//   options: {}
// }
