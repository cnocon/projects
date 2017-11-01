import React from 'react';

export default class Button extends React.Component {
  classify (key, value) {
    let terms = value.split(' ');
    let classNames = 'btn ';

    while (terms.length > 0) {
      const text = terms.pop();
      let newClass = /^-/.test(text) ? 'btn' + text : text;
      classNames += ' ' + newClass;
    }

    return classNames;
  }

  render () {
    const Tag = this.props.value ? 'button' : 'a';
    const classes = this.classify(Tag, this.props.className);
    const text = this.props.value || this.props.label;
    return (
      <Tag {...this.props} className={classes}>{text}</Tag>
    );
  }
}
