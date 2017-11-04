import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    // the only time you directly set state is here. every other time you have to call this.setState(blah) or else React won't recognize that there was a state change!! Using this.setState lets react know something changed and it needs to call the render method again.
    this.state = {
      clickCount: 0,
      labels: []
    };
  }
  onClick(e) {
    let labels = this.state.labels.concat([this.state.clickCount]);
    this.setState({
      clickCount: this.state.clickCount+1,
      labels: labels
    });
  }
  render() {
    let buttons = this.state.labels.map(
      // arrow functions automatically have this as component context?
      (value, i) => {
        // you have to give it a key if you are creating elements dynamically
        return <Button key={value} value={`${value}`} type="button" className="-info -lg"/>
      }
    );
    return (
      <Jumbotron className="-fluid" containerFluid={true}>
        <h1 className="display-3">Building React User Interfaces</h1>
        <p className="lead">with Bootstrap and SASS</p>
        <Button href="http://cristin.io" role="button" target="_blank" label="Code" className="-primary -lg"/>
        <Button href="mailto:cristin@cristin.io" role="button" target="_blank" label="Contact" className="-primary -lg" />
        <Button onClick={this.onClick} type="button" className="-success rounded rounded-circle -lg" value={this.state.clickCount || '0'}/>
      <CSSTransitionGroup transitionName='buttons'transitionLeaveTimeout={5000} transitionEnterTimeout={5000}>{buttons}</CSSTransitionGroup>
      </Jumbotron>

    );
  }
}
