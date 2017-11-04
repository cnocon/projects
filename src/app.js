import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
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
  onReset(e) {
    this.setState({clickCount: 0, labels: []});
  }
  render() {
    let buttons = this.state.labels.map(
      (value, i) => {
        return <Button key={i} value={`${value}`} type="button" className="-info -lg"/>
      }
    );
    return (
      <Jumbotron className="-fluid" containerFluid={true}>
        <h1 className="display-3">Building React User Interfaces</h1><p className="lead">with Bootstrap and SASS</p>

        <Button href="mailto:cristin@cristin.io" role="button" target="_blank" label="Contact" className="-primary -lg" />

        <Button onClick={this.onClick} type="button" className="-light" value={`${this.state.clickCount} Clicks`}/>

        <Button onClick={this.onReset} type="button" className="-danger -lg" value="Reset"/>
        <br/><br/>
        <CSSTransitionGroup transitionName='buttons' transitionLeaveTimeout={500} transitionEnterTimeout={2000}>{buttons}</CSSTransitionGroup>
      </Jumbotron>
    );
  }
}
