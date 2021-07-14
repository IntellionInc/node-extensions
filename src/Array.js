Object.defineProperties(Array.prototype, {
  first: {
    value: function () {
      return this[0];
    },
  },
  last: {
    value: function () {
      return this[this.length - 1];
    },
  },
  append: {
    value: function (...args) {
      this.push(...args);
      return this;
    },
  },
  removeLast: {
    value: function() {
      this.pop();
      return this;
    }
  }
});
