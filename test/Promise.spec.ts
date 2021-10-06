import "../src/Promise.ts";

describe("Promise", () => {
	describe("waitFor", () => {
		const milliseconds = 5555;
		const now = 160000000000;

		const setTimeoutImplementation = (
			callback: () => NodeJS.Timeout,
			time: number
		): NodeJS.Timeout => {
			jest.advanceTimersByTime(time);
			return callback();
		};

		beforeEach(() => {
			jest.useFakeTimers();
			jest.setSystemTime(now);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			jest.spyOn(global, "setTimeout").mockImplementation(setTimeoutImplementation);
		});

		afterEach(() => {
			jest.useRealTimers();
		});

		it("should wait for designated time before resolving", async () => {
			await Promise.waitFor(milliseconds);
			expect(Number(new Date())).toBe(now + milliseconds);
			expect(global.setTimeout).toHaveBeenCalledWith(expect.anything(), milliseconds);
		});
	});
});
