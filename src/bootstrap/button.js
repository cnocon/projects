import React from 'react';

export default class Button extends React.Component {
  classify (key, value) {
    const terms = value.split(' ');
    let classes = 'btn';
    while (terms.length > 0) {
      const text = terms.pop();
      const newClass = /^-/.test(text) ? `${key}${text}` : text;
      classes += ` ${newClass}`;
    }
    return classes;
  }
  render () {
    const Tag = this.props.value ? 'button' : 'a';
    const classNames = this.classify('btn', this.props.className);
    const text = this.props.value || this.props.label;
    return (
      <Tag {...this.props} className={classNames}>{text}</Tag>
    );
  }
}
