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
});