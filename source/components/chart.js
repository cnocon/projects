import React from 'react';
import ChartJS from 'Chart.js';

export default class Chart extends React.Component {
  componentDidMount() {
    const context = this.refs['chart'].getContext('2d');
    let {type, data, options} = this.props;

    this.chart = new ChartJS(context, {
      type: type,
      data: data,
      options: options
    })
  }
  render() {
    return (
      <div style={{width:900, height:300}}>
        <canvas ref="chart"></canvas>
      </div>
    )
  }
}
