// since we would use the classify method for more than just buttons with the bootstrap theme, we should extract it out into a new "utility package" for bootstrap.


// this time you don't use "default" because you'll have more than one utility method... you can't send just one by default NOTE - when you reference it from your button component class, make sure you change it from `this.classify` to just `classify`
export function classify (key, value) {
  const terms = value.split(' ');
  let classes = key;
  while (terms.length > 0) {
    const text = terms.pop();
    const newClass = /^-/.test(text) ? `${key}${text}` : text;
    classes += ` ${newClass}`;
  }
  return classes;
}

