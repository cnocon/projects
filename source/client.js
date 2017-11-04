import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';

const data = {
  type: 'bar',
  data: {
    labels: ["Ben", "James", "Marry", "Sam", "Gloria"],
    dataset: [
      {
        label: 'Fun',
        data:[80,40,21,44,94],
        borderColor: "rgba(255,0,0,0.2)",
        borderWidth:1
      },
      {
        label: 'Smart',
        data:[90,30,90,90,100],
        borderColor: "green",
        borderWidth:1
      }
    ]
  },
  options: {}
}

ReactDOM.render(<Chart {...data} />, document.getElementById('root'));

