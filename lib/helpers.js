module.exports = {
  comma: function (size, index, value) {
    if (index >= size - 1) {
      return value;
    } else {
      return value + ',';
    }
  },
  month: function (date) {
    let d = new Date(date);
    if (date === 'present') {
      return 'Present';
    }
    return d.toLocaleString('en-us', { month: 'short' }) + '/';
  },
  year: function (date) {
    let d = new Date(date);
    if (date === 'present') {
      return '';
    }
    return d.getFullYear();
  },
  lastElement: function (i, length, opts) {
    if (i < (length - 1)) {
      return opts.fn(this);
    }
    return opts.inverse(this);
  }
}
