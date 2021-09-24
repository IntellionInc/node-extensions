import "../src/Object.ts";

describe("Object", () => {
	describe("toQueryString", () => {
		const cases = [
			{
				input: {
					param1: 42,
					param2: "param2"
				},
				result: "param1=42&param2=param2"
			},
			{
				input: {
					param1: 42,
					param2: "param2",
					param3: 42
				},
				result: "param1=42&param2=param2&param3=42"
			}
		];
		it("should return the query string", () => {
			cases.forEach(({ input, result }) => {
				expect(input.toQueryString()).toEqual(result);
			});
		});
	});
});
