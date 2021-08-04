import "../src/Date";

describe("Date", () => {
	describe("toInteger", () => {
		describe("miliseconds", () => {
			const input = new Date(1609459200000); // 2021-01-01
			const output = 1609459200000;
			it("should convert the Date into an integer in miliseconds", () => {
				expect(input.toInteger()).toBe(output);
			});
		});
	});
});
