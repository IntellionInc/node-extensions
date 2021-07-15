interface PluckObject {
  [key: string]: any
}

Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
    },
  },
  append: {
    value: function (...args: []): [] {
      this.push(...args);
      return this;
    },
  },
  removeLast: {
    value: function (): [] {
      this.pop();
      return this;
    },
  },
  looselyEquals: {
    value: function (arr: []) {
      return this.every((item: unknown, i: number) => arr[i] === item);
    },
  },
  pluck: {
    value: function (key: string) {
      return this.map((item: PluckObject) => item[key]);
    },
  },
});