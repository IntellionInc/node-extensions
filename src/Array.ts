declare global {
	interface Array<T> {
		/**
		 * Gets or sets the first element of the array.
		 */
		first: T;
		/**
		 * Gets or sets the last element of the array.
		 */
		last: T;
		/**
		 * Appends new elements to the end of an array, and returns the array.
		 * @param args New elements to add to the array.
		 */
		append(...args: any[]): any[];
		/**
		 * Removes the last element from an array and returns the array.
		 */
		removeLast(): T[];
		/**
		 * Checks if the contents of two arrays are equal up to a depth of 1.
		 * @param arr Array to be compared with the base array.
		 */
		looselyEquals(arr: any[]): boolean;
		/**
		 * Deconstructs a specific property from an array of objects, and returns a new array consisting of these properties.
		 * @param key Name of the property to be plucked.
		 */
		pluck(key: string): any[];
		/**
		 * Asynchronous forEach method.
		 * @param callback Async function as input.
		 */
		asyncForEach(callback: any): Promise<any>;
		/**
		 * Creates and returns an array with a stepsize
		 * @param stepSize Stepsize to create a new array.
		 */
		range(stepSize?: number): T[];
	}
}
declare global {
	interface PluckObject {
		[key: string]: any;
	}
}

Object.defineProperties(Array.prototype, {
	first: {
		get: function () {
			return this[0];
		},
		set: function (val) {
			this[0] = val;
		}
	},
	last: {
		get: function () {
			return this[this.length - 1];
		},
		set: function (val) {
			this[this.length - 1] = val;
		}
	},
	append: {
		value: function (...args: []): [] {
			this.push(...args);
			return this;
		}
	},
	removeLast: {
		value: function (): [] {
			this.pop();
			return this;
		}
	},
	looselyEquals: {
		value: function (arr: []) {
			return this.every((item: unknown, i: number) => arr[i] === item);
		}
	},
	pluck: {
		value: function (key: string) {
			return this.map((item: PluckObject) => item[key]);
		}
	},
	asyncForEach: {
		value: async function (callback: any) {
			for (let i = 0; i <= this.length - 1; i++) {
				await callback(this[i]);
			}
		}
	},
	range: {
		value: function (stepSize?: number) {
			const step = stepSize || 1;
			const range = [],
				start = Math.min(this[0]),
				end = Math.min(this[1]),
				sign = () => (end - start) / Math.abs(end - start),
				increment = (x: number) => x + Math.abs(step) * sign();
			for (let i = start; i * sign() <= end * sign(); i = increment(i)) range.push(i);
			return range;
		}
	}
});

export default Array.prototype;
