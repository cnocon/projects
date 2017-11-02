import React from 'react';
import {classify} from './utils'

export default class Button extends React.Component {
  render () {
    const Tag = this.props.value ? 'button' : 'a';
    const classNames = classify('btn', this.props.className);
    const text = this.props.value || this.props.label;
    return (
      <Tag {...this.props} className={classNames}>{text}</Tag>
    );
  }
}
