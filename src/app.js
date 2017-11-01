import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-sm-center">
        <div className="container">
          <h1>Building React User Interfaces with Bootstrap and SASS</h1>
          <Button href="http://cristin.io" target="_blank" className="btn btn-primary"/>
          <Button href="mailto:cristin@cristinoconnor.com"  className="btn btn-secondary"/>
        </div>
      </div>
    );
  }
}
