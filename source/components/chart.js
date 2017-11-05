import React from 'react';
import ChartJS from 'Chart.js';

ChartJS.defaults.global.defaultFontSize = 16;

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
      <canvas ref="chart"></canvas>
    )
  }
}
