import React from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div {...this.props} className={classify('jumbotron', this.props.className)}>
        <Container className="text-white p-4" fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
