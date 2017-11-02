import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6

import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <CSSTransitionGroup transitionName='app' transitionAppearTimeout={500} transitionAppear={true} transitionLeaveTimeout={500} transitionEnterTimeout={500}>
        <Jumbotron className="-fluid" containerFluid={true}>
          <h1 className="display-3">Building React User Interfaces</h1>
          <p className="lead">with Bootstrap and SASS</p>
          <Button href="http://cristin.io" role="button" target="_blank" label="Code" className="-primary -lg"/>
          <Button href="mailto:cristin@cristin.io" role="button" target="_blank" label="Contact" className="-primary -lg" />
          <Button type="button" className="-danger rounded rounded-circle text-light -lg" value="&hearts;"/>
        </Jumbotron>
      </CSSTransitionGroup>
    );
  }
}
