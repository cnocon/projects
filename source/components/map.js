import React from 'react';

export default class Map extends React.Component {
  onClick(e) {
    if (true) {
      let img = e.target,
          latSize = img.height / 180, // calculate size of latitude
          lonSize = img.width / 360, // size of longitude
          point = {
            x: e.offsetX || e.pageX - e.target.offsetLeft,
            y: e.offsetY || e.pageY - e.target.offsetTop
          },
          lat, lon,
          r = 1; // range of 1 degree

      lat = -1 * (point.y - (img.height / 2)) / latSize;
      lon = (point.x - (img.width / 2)) / lonSize;

      console.log(lat, lon);
      var ws = `http://api.geonames.org/citiesJSON?formatted=true&north=${lat+r}&south=${lat-r}&east=${lon+r}&west=${lon-r}&lang=en&username=demo&style=full`;
      console.log(ws);
    }
  }

  render () {
    return (
      <img onClick={this.onClick} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Earthmap1000x500.jpg" />
    )
  }
}
