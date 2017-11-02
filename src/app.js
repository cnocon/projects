import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-sm-center">
        <div className="container">
          <h1 className="font-weight-light display-4">Building React User Interfaces with Bootstrap and SASS</h1>
          <p className="lead mb-5">with Bootstrap and SASS</p>
          <Button href="http://cristin.io" label="Code Examples" className="-primary ml-2" target="_blank"/>
          <Button href="mailto:cristin@cristin.io" label="Contact Me" className="-primary ml-2" />
          <p><Button type="button" value="I'm Useless" className="-secondary mx-auto w-60 mt-4" /></p>
        </div>
      </div>
    );
  }
}
