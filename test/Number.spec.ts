import "../src/Number.ts";

describe("Number", () => {
	describe("time conversions to milliseconds", () => {
		describe("seconds", () => {
			const input = 1;
			const output = 1000;
			it("should hold the value converted from seconds to milliseconds", () => {
				expect(input.seconds).toBe(output);
			});
		});
		describe("minutes", () => {
			const input = 1;
			const output = 60000;
			it("should hold the value converted from minutes to milliseconds", () => {
				expect(input.minutes).toBe(output);
			});
		});
		describe("hours", () => {
			const input = 1;
			const output = 3600000;
			it("should hold the value converted from hours to milliseconds", () => {
				expect(input.hours).toBe(output);
			});
		});
		describe("days", () => {
			const input = 1;
			const output = 86400000;
			it("should hold the value converted from days to milliseconds", () => {
				expect(input.days).toBe(output);
			});
		});
		describe("months", () => {
			const input = 1;
			const output = 2592000000;
			it("should hold the value converted from months to milliseconds", () => {
				expect(input.months).toBe(output);
			});
		});
		describe("years", () => {
			const input = 1;
			const output = 31536000000;
			it("should hold the value converted from years to milliseconds", () => {
				expect(input.years).toBe(output);
			});
		});
	});

	describe("Time conversions from milliseconds", () => {
		describe("inYears", () => {
			const input = 31536000000;
			const output = 1;
			it("should convert the value from milliseconds to years", () => {
				expect(input.inYears).toBe(output);
			});
		});
		describe("inMonths", () => {
			const input = 2592000000;
			const output = 1;
			it("should convert the value from milliseconds to months", () => {
				expect(input.inMonths).toBe(output);
			});
		});
		describe("inDays", () => {
			const input = 31536000000;
			const output = 365;
			it("should convert the value from milliseconds to days", () => {
				expect(input.inDays).toBe(output);
			});
		});
		describe("inHours", () => {
			const input = 31536000000;
			const output = 365 * 24;
			it("should convert the value from milliseconds to hours", () => {
				expect(input.inHours).toBe(output);
			});
		});
		describe("inMinutes", () => {
			const input = 31536000000;
			const output = 365 * 24 * 60;
			it("should convert the value from milliseconds to minutes", () => {
				expect(input.inMinutes).toBe(output);
			});
		});
		describe("inSeconds", () => {
			const input = 31536000000;
			const output = 365 * 24 * 60 * 60;
			it("should convert the value from milliseconds to seconds", () => {
				expect(input.inSeconds).toBe(output);
			});
		});
	});

	describe("Date operations", () => {
		beforeEach(() => {
			jest.useFakeTimers();
			jest.setSystemTime(new Date(1609459200000)); // 2021-01-01
		});
		afterEach(() => {
			jest.useRealTimers();
		});

		describe("fromNow", () => {
			const input = 5000;
			const output = new Date(1609459200000 + 5000);
			it("should return a date object depicting 'input' milliseconds from now", () => {
				expect(input.fromNow()).toStrictEqual(output);
			});
		});
		describe("beforeNow", () => {
			const input = 5000;
			const output = new Date(1609459200000 - 5000);
			it("should return a date object depicting 'input' milliseconds before now", () => {
				expect(input.beforeNow()).toStrictEqual(output);
			});
		});
		describe("from", () => {
			const input = 5000;
			const args = new Date(1600000000000);
			const output = new Date(1600000000000 + 5000);
			it("should return a date object depicting 'input' milliseconds from the given date", () => {
				expect(input.from(args)).toStrictEqual(output);
			});
		});
		describe("before", () => {
			const input = 5000;
			const args = new Date(1600000000000);
			const output = new Date(1600000000000 - 5000);
			it("should return a date object depicting 'input' milliseconds before the given date", () => {
				expect(input.before(args)).toStrictEqual(output);
			});
		});
	});
});
