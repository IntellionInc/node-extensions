import "../src/Promise.ts";

describe("Promise", () => {
	describe("waitFor", () => {
		const milliseconds = 5555;
		const now = 160000000000;
		const exampleTimeout = setTimeout(() => {
			return;
		});

		const setTimeoutImplementation = (
			callback: () => void,
			ms?: number
		): NodeJS.Timeout => {
			jest.advanceTimersByTime(ms || 0);
			callback();
			return exampleTimeout;
		};

		beforeEach(() => {
			jest.useFakeTimers();
			jest.setSystemTime(now);

			jest.spyOn(global, "setTimeout").mockImplementation(setTimeoutImplementation);
		});

		afterEach(() => {
			jest.useRealTimers();
			clearTimeout(exampleTimeout);
		});

		it("should wait for designated time before resolving", async () => {
			await Promise.waitFor(milliseconds);
			expect(Number(new Date())).toBe(now + milliseconds);
			expect(global.setTimeout).toHaveBeenCalledWith(expect.anything(), milliseconds);
		});
	});
});
