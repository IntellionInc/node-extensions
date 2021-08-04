declare global {
	interface String {
		/**
		 * Converts given string to Title Case.
		 */
		toTitleCase(): string;
		/**
		 * Converts given string to snake_case.
		 */
		toSnakeCase(): string;
		/**
		 * Converts given string to PascalCase.
		 */
		toPascalCase(): string;
		/**
		 * Converts given string to camelCase.
		 */
		toCamelCase(): string;
		/**
		 * Converts given string to a Number object.
		 */
		toNumber(): number;
	}
}

Object.defineProperties(String.prototype, {
	toTitleCase: {
		value: function () {
			return this.replace(
				/\b\w+('\w{1})?/g,
				(match: string) => match.charAt(0).toUpperCase() + match.substr(1).toLowerCase()
			);
		}
	},
	toSnakeCase: {
		value: function () {
			return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: number) => {
				if (/\s+/.test(match)) return "";
				return index === 0 ? match : "_" + match;
			});
		}
	},
	toPascalCase: {
		value: function () {
			return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string) => {
				if (/\s+/.test(match)) return "";
				return match.toUpperCase();
			});
		}
	},
	toCamelCase: {
		value: function () {
			return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: number) => {
				if (/\s+/.test(match)) return "";
				return index === 0 ? match.toLowerCase() : match.toUpperCase();
			});
		}
	},
	toNumber: {
		value: function () {
			return new Date(Number(this));
		}
	}
});

export default String.prototype;
