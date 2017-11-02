import React from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
  render() {
    // this will help us fix the fact that a prop passed (containerFluid) is NOT a valid html attribute (and we're using the spread operater, '...' to insert html attributes in the return element (note we changed the reference from `this.props` to the new `props` variable, and is causing an error in the console
    const props = Object.assign({}, this.props);
    const containerFluid = props.containerFluid;
    // now delete the property that is causing the invalid html error
    delete props.containerFluid;
    return (
      // we reference the props const now, instead of this.props`
      <div {...props} className={classify('jumbotron', this.props.className)}>
        <Container className="text-white p-4" fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
