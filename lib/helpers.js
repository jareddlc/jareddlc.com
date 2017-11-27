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
      d = new Date();
    }
    return d.toLocaleString('en-us', { month: 'short' });
  },
  year: function (date) {
    let d = new Date(date);
    if (date === 'present') {
      d = new Date();
    }
    return d.getFullYear();
  }
}
