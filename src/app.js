import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <Jumbotron className="-fluid text-sm-center custom" containerFluid={true}>
      <h1 className="display-2 text-white">Building React User Interfaces</h1>
      <p className="lead mb-5 display-4 text-white">with Bootstrap and SASS</p>
      <Button href="//cristin.io" label="Code Examples" className="-primary -lg mr-4" role="button" target="_blank"/>
      <Button href="mailto:cristin@cristin.io" label="Contact Me" className="-primary -lg" />
      <p className="mt-4"><Button type="button" value="&hearts;" className="-secondary text-primary -lg" /></p>
      </Jumbotron>
    );
  }
}
