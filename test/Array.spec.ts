import "../src/Array.ts";

describe("Array", () => {
  let array1 = ["c", "d", 1, 3]

  describe("first", () => {
    it("should return the first item in an array", () => {
      expect(array1.first).toBe("c");
    });
  });
  describe("last", () => {
    it("should return the last item of array", () => {
      expect(array1.last).toBe(3);
    });
  });
  describe("append", () => {
    let arr = ["c", "d", 1, 3];
    let items = ["$", "a"];
    let output = ["c", "d", 1, 3, "$", "a"];
    it("should push the arguments to the array and return the array ", () => {
      const result = arr.append(...items);
      expect(result).toBe(arr);
      expect(result).toEqual(output);
    });
  });
  describe("removeLast", () => {
    let arr = ["c", "d", 1, 3];
    let output = ["c", "d", 1];
    it("should remove the last element from the array and return the array", () => {
      let result = arr.removeLast();
      expect(result).toBe(arr);
      expect(result).toEqual(output);
    });
  });
  describe("looselyEquals", () => {
    describe("when arrays include only primitives", () => {
      let arr = ["c", "d", 1, 3];
      describe("when loosely equals", () => {
        let comparison = ["c", "d", 1, 3];
        it("should return true", () => {
          expect(arr.looselyEquals(comparison)).toEqual(true);
          expect(arr).toEqual(comparison);
        });
      });
      describe("when not loosely equals", () => {
        let comparison = ["c", "d", 3, 1];
        it("should return false", () => {
          expect(arr.looselyEquals(comparison)).toEqual(false);
          expect(arr).not.toEqual(comparison);
        });
      });
    });
    describe("when arrays include non-primitive values", () => {
      let obj1 = { some: "obj" };
      let arr = ["c", "d", 1, obj1];
      describe("when all values and references are the same", () => {
        let comparison = ["c", "d", 1, obj1];
        it("should return true", () => {
          expect(arr.looselyEquals(comparison)).toEqual(true);
        });
      });
      describe("when some references are different", () => {
        let obj2 = { some: "obj" };
        let comparison = ["c", "d", 1, obj2];
        it("should return false", () => {
          expect(arr.looselyEquals(comparison)).toEqual(false);
        });
      });
    });
  });
  describe("pluck", () => {

    const keys: PluckObject[] = [
      { i: "value1-1", j: 1 },
      { i: "value1-2", j: 2 },
      { i: "value1-3", j: 3 },
    ];
    let arr: PluckObject[] = [
      { key1: keys[0], key2: { i: "value2-1" } },
      { key1: keys[1], key2: { i: "value2-2" } },
      { key1: keys[2], key2: { i: "value2-3" } },
    ];
    it("should create a new array from a deconstructed property", () => {
      let result = arr.pluck("key1");
      result.forEach((key, i: number) => expect(key).toBe(keys[i]));
    });
  });
});
