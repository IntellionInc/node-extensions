import { DateTime } from "luxon";

declare global {
	interface String {
		/**
		 * Replaces occurances of keys of a given object in a string with the corresponding values.
		 */
		replaceMultiple(replaceMap: Record<string, any>): string;
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
		toDate(): Date;
		/**
		 * Converts givevn string to a Luxon DateTime object.
		 */
		toDateTime(): DateTime;
	}
}

Object.defineProperties(String.prototype, {
	replaceMultiple: {
		value: function (replaceMap: Record<string, any>) {
			const matchExpression = new RegExp(Object.keys(replaceMap).join("|"), "g");
			return this.replace(matchExpression, (matched: string) => replaceMap[matched]);
		}
	},
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
	toDate: {
		value: function () {
			return new Date(this);
		}
	},
	toDateTime: {
		value: function () {
			return DateTime.fromJSDate(this.toDate());
		}
	}
});

export default String.prototype;
