import "../src/Array.js";
import { expect } from "./matchalatte.js";

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
    let arr = [...array1];
    let items = ["$", "a"];
    it("should push the arguments to the array and return the array ", () => {
      expect(arr.append(...items)).to.eq(arr)
    });
  });
});