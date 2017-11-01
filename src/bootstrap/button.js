import React from 'react';

export default class Button extends React.Component {
  render () {
    return (
      <a {...this.props}>{this.props.href}</a>
    );
  }
}

