import "../src/Array.js";
import { expect } from "./matchalatte.js";

const arrayEqual = (a1, a2) =>
  a1.length === a2.length && a1.every((item, i) => a2[i] === item);

describe("Array", () => {
  let array1 = ["c", "d", 1, 3];

  describe("first", () => {
    it("should return the first item in an array", () => {
      expect(array1.first()).to.eq("c");
    });
  });
  describe("last", () => {
    it("should return the last item of array", () => {
      expect(array1.last()).to.eq(3);
    });
  });
  describe("append", () => {
    let arr = ["c", "d", 1, 3];
    let items = ["$", "a"];
    let result = ["c", "d", 1, 3, "$", "a"];
    it("should push the arguments to the array and return the array ", () => {
      arr.append(...items);
      arrayEqual(arr, result);
    });
  });
  describe("removeLast", () => {
    let arr = ["c", "d", 1, 3];
    let result = ["c", "d", 1];
    it("should remove the last element from the array and return the array", () => {
      arr.removeLast();
      expect(arrayEqual(arr, result)).to.eq(true);
    });
  });
});
