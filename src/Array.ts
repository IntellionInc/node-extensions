declare global {
  interface Array<T> {
    /**
     * Gets the first element of the array.
     */
    first: T;
    /**
     * Gets the last element of the array.
     */
    last: T;
    /**
     * Appends new elements to the enf of an array, and returns the array.
     * @param args New elements to add to the array.
     */
    append(...args: any[]): any[];
    /**
     * Removes the last element from an array and returns the array.
     */
    removeLast(): T[];
    /**
     * Checks if the contents of two arrays are equal up to a depth of 1.
     * @param arr Array to be compared with the base array.
     */
    looselyEquals(arr: any[]): boolean;
    /**
     * Deconstructs a specific property fro man array of objects, and returns a new array consisting of these properties.
     * @param key Name of the property to be plucked.
     */
    pluck(key: string): any[];
  }
}
declare global {
  interface PluckObject {
    [key: string]: any;
  }
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

export default Array.prototype;
