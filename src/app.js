import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <Jumbotron className="-fluid" containerFluid={true}>
        <h1 className="display-3">Building React User Interfaces</h1>
        <p className="lead">with Bootstrap and SASS</p>
        <Button href="http://cristin.io" label="Code Examples" className="-primary -lg" role="button" target="_blank"/>
        <Button href="mailto:cristin@cristin.io" role="button" label="Contact Me" className="-primary -lg" />
        <Button type="button" value="&hearts;" className="-secondary -lg text-primary" />
      </Jumbotron>
    );
  }
}
