import "../src/String.js";
import { expect } from "chai";

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
  describe("toSnakeCase", () => {
    const cases = [
      {
        input: "alice_bob",
        result: "alice_bob"
      },
      {
        input: "AliceBob",
        result: "Alice_Bob"
      },
      {
        input: "Alice Bob",
        result: "Alice_Bob",
      },
      {
        input: "aliceBob carol",
        result: "alice_Bob_carol"
      }
    ];
    it("should return the input in snake case", () => {
      cases.forEach(({ input, result }) => {
        expect(input.toSnakeCase()).to.eq(result);
      });
    });
  });
  describe("toPascalCase", () => {
    const cases = [
      {
        input: "AliceBob",
        result: "AliceBob"
      },
      {
        input: "aliceBob",
        result: "AliceBob"
      },
      {
        input: "Alice Bob",
        result: "AliceBob",
      },
      {
        input: "aliceBob carol",
        result: "AliceBobCarol"
      }
    ];
    it("should return the input in snake case", () => {
      cases.forEach(({ input, result }) => {
        expect(input.toPascalCase()).to.eq(result);
      });
    });
  });
  describe("toCamelCase", () => {
    const cases = [
      {
        input: "aliceBob",
        result: "aliceBob"
      },
      {
        input: "AliceBob",
        result: "aliceBob"
      },
      {
        input: "Alice Bob",
        result: "aliceBob",
      },
      {
        input: "aliceBob carol",
        result: "aliceBobCarol"
      }
    ];
    it("should return the input in title case", () => {
      cases.forEach(({ input, result }) => {
        expect(input.toCamelCase()).to.eq(result);
      });
    });
  });
});
