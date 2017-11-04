import React from 'react';

export default class App extends React.Component {
  render () {
    var smartMessage = this.props.smart ? "She's smart." : "She's not smart.";
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>She is at least {this.props.age} years old. {smartMessage}.</p>
      </div>
    )
  }
}
