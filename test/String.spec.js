import "../src/String.js";
import { expect } from "./matchalatte.js";

describe("String", () => {
  describe("toTitleCase", () => {
    const cases = [
      {
        input: "Alice Bob",
        result: "Alice Bob",
      },
      {
        input: "aLiCe BOb",
        result: "Alice Bob",
      },
      {
        input: "alice-bob",
        result: "Alice-Bob",
      },
      {
        input: "Ali'ce Bob",
        result: "Ali'ce Bob",
      },
      {
        input: "Alice/bob",
        result: "Alice/Bob",
      },
    ];
    it("should return the input in title case", () => {
      cases.forEach(({ input, result }) => {
        expect(input.toTitleCase()).to.eq(result);
      });
    });
  });
});
