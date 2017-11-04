import React from 'react';
import Griddle from 'griddle-react';

export default class Map extends React.Component {
  constructor(props) {
    // gets React.Component props
    super(props);
    // below line always binds scope here to all of them
    this.onClick = this.onClick.bind(this);
    this.state = {
      cities: []
    }
  }
  onClick(e) {
    let img = e.target,
        latSize = img.height / 180,
        lonSize = img.width / 360,
        point = {
          x: e.offsetX || e.pageX - e.target.offsetLeft,
          y: e.offsetY || e.pageY - e.target.offsetTop
        },
        lat = -1 * (point.y - (img.height / 2)) / latSize,
        lon = (point.x - (img.width / 2)) / lonSize,
        r = 1,
        endpoint = `http://api.geonames.org/citiesJSON?formatted=true&north=${lat+r}&south=${lat-r}&east=${lon+r}&west=${lon-r}&lang=en&username=geek&style=full`;


    // call the web service by creating new Xml http request
    var xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    // arrow functions capture this as what's outside of it
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.setState({
          cities: JSON.parse(xhr.responseText).geonames
        });
      } else {
        // Error
      }
    };
    xhr.send();

  }

  render () {
    return (
      <div>
        <img onClick={this.onClick} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Earthmap1000x500.jpg"/>
        <Griddle data={this.state.cities} />
      </div>
    )
  }
}
