const convertSpacesAndFirstLetters = (casing) => {
  return function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (/\s+/.test(match)) return "";
      switch (casing) {
        case "snake":
          return index === 0 ? match : "_" + match;
        case "pascal":
          return match.toUpperCase();
        case "camel":
        default:
          return index === 0 ? match.toLowerCase() : match.toUpperCase();
      }
    });
  };
};

Object.defineProperties(String.prototype, {
  toTitleCase: {
    value: function () {
      return this.replace(
        /\b\w+('\w{1})?/g,
        (match) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
      );
    },
  },
  toSnakeCase: {
    value: convertSpacesAndFirstLetters("snake"),
  },
  toPascalCase: {
    value: convertSpacesAndFirstLetters("pascal"),
  },
  toCamelCase: {
    value: convertSpacesAndFirstLetters("camel"),
  },
});
