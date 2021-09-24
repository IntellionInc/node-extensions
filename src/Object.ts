declare global {
	interface Object {
		/**
		 * Converts given query parameters to string.
		 */
		toQueryString(): string;
	}
}

Object.defineProperties(Object.prototype, {
	toQueryString: {
		value: function () {
			const searchParams = new URLSearchParams();
			Object.keys(this).forEach(key => searchParams.append(key, this[key].toString()));
			return searchParams.toString();
		}
	}
});

export default Object.prototype;
