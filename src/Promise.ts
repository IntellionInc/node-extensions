declare global {
	interface PromiseConstructor {
		/**
		 * Waits for designated time before resolving
		 */
		waitFor(milliseconds: number): void;
	}
}

Object.defineProperties(Promise, {
	waitFor: {
		value: (time: number): Promise<any> => {
			return new Promise(resolve => setTimeout(resolve, time));
		}
	}
});

export default Promise;
