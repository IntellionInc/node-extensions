import "../src/String.ts";

describe("String", () => {
	describe("toTitleCase", () => {
		const cases = [
			{
				input: "Alice Bob",
				result: "Alice Bob"
			},
			{
				input: "aLiCe BOb",
				result: "Alice Bob"
			},
			{
				input: "alice-bob",
				result: "Alice-Bob"
			},
			{
				input: "Ali'ce Bob",
				result: "Ali'ce Bob"
			},
			{
				input: "Alice/bob",
				result: "Alice/Bob"
			}
		];
		it("should return the input in title case", () => {
			cases.forEach(({ input, result }) => {
				expect(input.toTitleCase()).toEqual(result);
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
				result: "Alice_Bob"
			},
			{
				input: "aliceBob carol",
				result: "alice_Bob_carol"
			}
		];
		it("should return the input in snake case", () => {
			cases.forEach(({ input, result }) => {
				expect(input.toSnakeCase()).toEqual(result);
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
				result: "AliceBob"
			},
			{
				input: "aliceBob carol",
				result: "AliceBobCarol"
			}
		];
		it("should return the input in snake case", () => {
			cases.forEach(({ input, result }) => {
				expect(input.toPascalCase()).toEqual(result);
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
				result: "aliceBob"
			},
			{
				input: "aliceBob carol",
				result: "aliceBobCarol"
			}
		];
		it("should return the input in title case", () => {
			cases.forEach(({ input, result }) => {
				expect(input.toCamelCase()).toEqual(result);
			});
		});
	});
	describe("toDate", () => {
		const day = "2021-01-01";
		const time = "T00:30:00";

		describe("when called with day input", () => {
			const input = day;
			const output = new Date("2021-01-01");
			it("should return appropriate date object", () => {
				expect(input.toDate()).toEqual(output);
			});
		});

		describe("when called with day and time input", () => {
			const input = day + time;
			const output = new Date("2021-01-01T00:30:00");
			it("should return appropriate date object", () => {
				expect(input.toDate()).toEqual(output);
			});
		});
	});
});
