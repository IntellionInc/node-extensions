import "../src/Array.js";
import { expect } from "chai";

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
    let output = ["c", "d", 1, 3, "$", "a"];
    it("should push the arguments to the array and return the array ", () => {
      const result = arr.append(...items);
      expect(result).to.eq(arr);
      expect(result).to.eql(output);
    });
  });
  describe("removeLast", () => {
    let arr = ["c", "d", 1, 3];
    let output = ["c", "d", 1];
    it("should remove the last element from the array and return the array", () => {
      let result = arr.removeLast();
      expect(result).to.eq(arr);
      expect(result).to.eql(output);
    });
  });
  describe("looselyEquals", () => {
    context("when arrays include only primitives", () => {
      let arr = ["c", "d", 1, 3];
      context("when loosely equals", () => {
        let comparison = ["c", "d", 1, 3];
        it("should return true", () => {
          expect(arr.looselyEquals(comparison)).to.eq(true);
          expect(arr).to.eql(comparison);
        });
      });
      context("when not loosely equals", () => {
        let comparison = ["c", "d", 3, 1];
        it("should return false", () => {
          expect(arr.looselyEquals(comparison)).to.eq(false);
          expect(arr).to.not.eql(comparison);
        });
      });
    });
    context("when arrays include non-primitive values", () => {
      let obj1 = { some: "obj" };
      let arr = ["c", "d", 1, obj1];
      context("when all values and references are the same", () => {
        let comparison = ["c", "d", 1, obj1];
        it("should return true", () => {
          expect(arr.looselyEquals(comparison)).to.eq(true);
        });
      });
      context("when some references are different", () => {
        let obj2 = { some: "obj" };
        let comparison = ["c", "d", 1, obj2];
        it("should return false", () => {
          expect(arr.looselyEquals(comparison)).to.eq(false);
        });
      });
    });
  });
});
