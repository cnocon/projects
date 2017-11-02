import React from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
  render() {
    const CSS_NAME = 'jumbotron';
    const props = Object.assign({}, this.props);
          props.className = classify(CSS_NAME, props.className);
    const containerFluid = props.containerFluid;
     // remove invalid html attr from props spread
    delete props.containerFluid;
    // it's dumb we have the containerFluid property getting passed to the component at all if we can just tell by the use of one of the classNames or not... but i think the point of this segment/commit is to just see how you can use a parent component to set a child components state, WITH OR WITHOUT a non-className property (even if that non-className property isn't a valid html attribute)
    const body = props.className.includes(CSS_NAME+'-fluid') ?
      <Container fluid={containerFluid}>{this.props.children}</Container> : this.props.children;
    return (
      <div {...props}>{ body }</div>
    );
  }
}
