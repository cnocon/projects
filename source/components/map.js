import React from 'react';

export default class Map extends React.Component {
  onClick(e) {
    let img = e.target,
        latSize = img.height / 180,
        lonSize = img.width / 360,
        point = {
          x: e.offsetX || e.pageX - e.target.offsetLeft,
          y: e.offsetY || e.pageY - e.target.offsetTop
        },
        lat, lon,
        r = 1;

    lat = -1 * (point.y - (img.height / 2)) / latSize;
    lon = (point.x - (img.width / 2)) / lonSize;

    var ws = `http://api.geonames.org/citiesJSON?formatted=true&north=${lat+r}&south=${lat-r}&east=${lon+r}&west=${lon-r}&lang=en&username=demo&style=full`;

    // call the web service by creating new Xml http request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ws);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log('error');
      }
    };
    xhr.send();
  }

  render () {
    return (
      <img onClick={this.onClick} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Earthmap1000x500.jpg" />
    )
  }
}
