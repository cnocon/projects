import React from 'react';

export default class Map extends React.Component {
  onClick(e) {
    if (true) {
      let img = e.target,
          point = {
            x: e.offsetX || e.pageX - e.target.offsetLeft,
            y: e.offsetY || e.pageY - e.target.offsetTop
          };
      console.log(point);
    }
  }
  render () {
    return (
      <img onClick={this.onClick} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Earthmap1000x500.jpg" />
    )
  }
}
