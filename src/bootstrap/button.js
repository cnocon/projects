import React from 'react';

export default class Button extends React.Component {
  render () {
    const Tag = this.props.value ? 'button' : 'a';
    const className = this.props.className + ' btn';
    const text = this.props.value || this.props.label;
    return (
      <Tag {...this.props} className={className}>{text}</Tag>
    );
  }
}
