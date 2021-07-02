Object.defineProperties(Array.prototype, {
  first: {
    value: function () {
      return this[0];
    }
  },
  last: {
    value: function () {
      return this[this.length - 1];
    }
  }
});