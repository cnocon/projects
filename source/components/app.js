import React from "react";
import ChartJS from 'Chart.js';


export default class App extends React.Component{
  componentDidMount(){
    const ctx = document.getElementById("homicides").getContext('2d');

    let {type, data, options} = this.props;

    this.chart = new ChartJS(ctx,{
      type:type,
      data:data,
      options:options
    });
  }

  render(){
    return (
      <div>
        <canvas id="homicides"></canvas>

      </div>
    )
  }
}
