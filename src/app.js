import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6

import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './app.scss';

export default class App extends React.Component {
  // within the context of the constructor, we can make sure a react component knows how to fetch and handle props, so we're going to call for the parent via super
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    console.log(this); // 'this' is undefined since we are IN THE PROCESS OF CREATING A NEW OBJECT; `this` is not a thing yet. To fix this you can use a constructor,
  }
  render() {
    return (
      <CSSTransitionGroup transitionName='app' transitionAppearTimeout={500} transitionAppear={true} transitionLeaveTimeout={500} transitionEnterTimeout={500}>
        <Jumbotron className="-fluid" containerFluid={true}>
          <h1 className="display-3">Building React User Interfaces</h1>
          <p className="lead">with Bootstrap and SASS</p>
          <Button href="http://cristin.io" role="button" target="_blank" label="Code" className="-primary -lg"/>
          <Button href="mailto:cristin@cristin.io" role="button" target="_blank" label="Contact" className="-primary -lg" />
          <Button onClick={this.onClick} type="button" className="-danger rounded rounded-circle text-light -lg" value="&hearts;"/>
        </Jumbotron>
      </CSSTransitionGroup>
    );
  }
}
