import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
// import Button from './bootstrap/button';
// import Jumbotron from './bootstrap/jumbotron';
import './app.scss';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  // componentDidMount and componentWillUnmount methods are called “lifecycle hooks”.
  componentDidMount() {
    console.log(this);
    // setInterval calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
    // Note how they saved timerID directly on the class; While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store SOMETHING THAT IS NOT USED FOR THE VISUAL OUTPUT.
    // IF YOU DON’T USE SOMETHING IN RENDER(), IT SHOULDN’T BE IN THE STATE.
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  // In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.
  componentWillUnmount() {
    // note that componentWillUnmount doesn't get called just from re-rendering
    // clearInterval cancels repeated action which was set up using setInterval().
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1 className="display-4">It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

class Button extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log(e.target);
  }
  render() {
    return (
      <div className="row">
        <a className="btn btn-primary mx-auto" href="http://cristin.io" onClick={this.handleClick} target="_blank">
        Log Me to the Console!
        </a>
      </div>
    )
  }
}
//this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    //pro tip: Generally, if you refer to a method without () after it, as is done in the return statement of render down there with onClick={this.handleClick}, you should bind that method.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState(
      prevState =>({isToggleOn: !prevState.isToggleOn})
    );
  }
  thisExperiment(e) {
    console.log(this);
    console.log(e);
  }
  render () {
    return (
      <div className="col-sm mt-2">
        <button onClick={this.handleClick} className="btn btn-dark btn-lg mx-auto">
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <div className="clearfix text-center mx-auto mt-2">
          <p className="lead text-left">If we wanted to pass arguments in the onClick callback, either of the below methods would work. The arrow callback button calls (e) => this.thisExperiment(e) onClick. The bind button calls this.thisExperiment.bind(this) onClick.</p>
          <a href="#" onClick={(e) => this.thisExperiment(e)} className="btn btn-dark btn-outline-primary">onClick (e) => this.thisExperiment(e)</a>

          <a href="#" onClick={this.thisExperiment.bind(this)} className="btn btn-dark btn-outline-primary ml-4">onClick this.thisExperiment.bind(this)</a>
        </div>
      </div>
    )
  }
}

export class App extends React.Component {
  render () {
    return (
      <div className="container p-4 text-center">
        <div className="row">;
          <div className="col-sm"><Clock /></div>
        </div>
        <div className="row">
          <div className="col-sm"><Button /></div>
        </div>

        <div className="row">
          <Toggle />
        </div>

      </div>
    )
  }
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClick = this.onClick.bind(this);
//     this.onReset = this.onReset.bind(this);
//     this.state = {
//       clickCount: 0,
//       labels: []
//     };
//   }
//   onClick(e) {
//     let labels = this.state.labels.concat([this.state.clickCount]);
//     this.setState({
//       clickCount: this.state.clickCount+1,
//       labels: labels
//     });
//   }
//   onReset(e) {
//     this.setState({clickCount: 0, labels: []});
//   }
//   render() {
//     let buttons = this.state.labels.map(
//       (value, i) => {
//         return <Button key={i} value={`${value}`} type="button" className="-info -lg"/>
//       }
//     );
//     return (
//       <Jumbotron className="-fluid" containerFluid={true}>
//         <h1 className="display-3">Building React User Interfaces</h1><p className="lead">with Bootstrap and SASS</p>

//         <Button href="mailto:cristin@cristin.io" role="button" target="_blank" label="Contact" className="-primary -lg" />

//         <Button onClick={this.onClick} type="button" className="-light" value={`${this.state.clickCount} Clicks`}/>

//         <Button onClick={this.onReset} type="button" className="-danger -lg" value="Reset"/>
//         <br/><br/>
//         <CSSTransitionGroup transitionName='buttons' transitionLeaveTimeout={500} transitionEnterTimeout={2000}>{buttons}</CSSTransitionGroup>
//       </Jumbotron>
//     );
//   }
// }
