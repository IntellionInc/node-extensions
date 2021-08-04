declare global {
	interface Date {
		/**
		 * Returns the value converted from Date as miliseconds
		 */
		toInteger(): number;
	}
}

Object.defineProperties(Date.prototype, {
	toInteger: {
		value: function () {
			return this.getTime();
		}
	}
});

export default Date.prototype;
