import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';

const data = {
  type: 'bar',
  data: {
    labels: ["Ben", "James", "Marry", "Sam", "Gloria"],
    datasets: [
      {
        label: 'Fun',
        data:[80,40,21,44,94],
        backgroundColor: "rgba(255,0,0,0.2)",
        borderColor: 'red',
        borderWidth:1
      },
      {
        label: 'Smart',
        data:[90,30,90,90,100],
        backgroundColor: "rgba(0,0,255,0.2)",
        borderColor: "blue",
        borderWidth:1
      }
    ]
  },
  options: {}
}

ReactDOM.render(<Chart {...data} />, document.getElementById('root'));

