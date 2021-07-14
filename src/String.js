Object.defineProperties(String.prototype, {
  toTitleCase: {
    value: function () {
      return this.replace(
        /\b\w+('\w{1})?/g,
        (match) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
      );
    },
  },
});
