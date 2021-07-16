interface String {
  toTitleCase(): string;
  toSnakeCase(): string;
  toPascalCase(): string;
  toCamelCase(): string;
}

Object.defineProperties(String.prototype, {
  toTitleCase: {
    value: function () {
      return this.replace(
        /\b\w+('\w{1})?/g,
        (match: string) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
      );
    },
  },
  toSnakeCase: {
    value: function () {
      return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match:string, index: number) => {
        if (/\s+/.test(match)) return "";
        return index === 0 ? match : "_" + match;
      });
    },
  },
  toPascalCase: {
    value: function () {
      return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string) => {
        if (/\s+/.test(match)) return "";
        return match.toUpperCase();
      });
    },
  },
  toCamelCase: {
    value: function () {
      return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: number) => {
        if (/\s+/.test(match)) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
    },
  },
});
