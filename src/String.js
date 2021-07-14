Object.defineProperties(String.prototype, {
  toTitleCase: {
    value: function () {
      return this.replace(
        /\b\w+('\w{1})?/g,
        (match) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
      );
    },
  },
  toCamelCase: {
    value: function () {
      return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (/\s+/.test(match)) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
    },
  },
});
