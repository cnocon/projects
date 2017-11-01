import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-sm-center" style={{height:'100vh'}}>
        <div className="container">
          <h1>Building React User Interfaces with Bootstrap and SASS</h1>
          <p>with Bootstrap and SASS</p>
          <Button type="button" value="Does Nothing" className="btn-danger" />
          <Button href="http://cristin.io" label="Code Examples" className="btn-success ml-2" target="_blank"/>
        </div>
      </div>
    );
  }
}
