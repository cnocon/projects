import React from 'react';
import ChartJS from 'Chart.js';

export default class Chart extends React.Component {
  render() {
    return (
      <div style={{width:900, height:300, backgroundColor:'cyan'}}><canvas></canvas>
      </div>
    )
  }
}
