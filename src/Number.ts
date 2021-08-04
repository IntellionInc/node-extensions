declare global {
	interface Number {
		/**
		 * Gets the value converted from seconds to milliseconds.
		 */
		seconds: number;
		/**
		 * Gets the value converted from minutes to milliseconds.
		 */
		minutes: number;
		/**
		 * Gets the value converted from hours to milliseconds.
		 */
		hours: number;
		/**
		 * Gets the value converted from days to milliseconds.
		 */
		days: number;
		/**
		 * Gets the value converted from months to milliseconds.
		 */
		months: number;
		/**
		 * Gets the value converted from years to milliseconds.
		 */
		years: number;

		/**
		 * Gets the value converted from millieseconds to years.
		 */
		inYears: number;
		/**
		 * Gets the value converted from millieseconds to months.
		 */
		inMonths: number;
		/**
		 * Gets the value converted from millieseconds to days.
		 */
		inDays: number;
		/**
		 * Gets the value converted from millieseconds to hours.
		 */
		inHours: number;
		/**
		 * Gets the value converted from millieseconds to minutes.
		 */
		inMinutes: number;
		/**
		 * Gets the value converted from millieseconds to seconds.
		 */
		inSeconds: number;

		/**
		 * Adds the given value to current Date and returns a new Date object depicting a future time.
		 */
		fromNow(): Date;
		/**
		 * Subtracts the given value from current Date and returns a new Date object depicting a past time.
		 */

		beforeNow(): Date;
		/**
		 * Adds the given value to the given date and returnds a new Date object depicting a future time.
		 * @param date Date to be manipulated.
		 */
		from(date: Date): Date;
		/**
		 * Subtracts the given value from current Date and returns a new Date object depicting a past time.
		 * @param date Date to be manipulated.
		 */
		before(date: Date): Date;
		/**
		 * Converts Number into a Date object and returns that object.
		 */
		toDate(): Date;
	}
}

Object.defineProperties(Number.prototype, {
	// Time conversions to milliseconds
	seconds: {
		get: function () {
			return this * 1000;
		}
	},
	minutes: {
		get: function () {
			return this * (60).seconds;
		}
	},
	hours: {
		get: function () {
			return this * (60).minutes;
		}
	},
	days: {
		get: function () {
			return this * (24).hours;
		}
	},
	months: {
		get: function () {
			return this * (30).days;
		}
	},
	years: {
		get: function () {
			return this * (365).days;
		}
	},
	// Time conversions from milliseconds
	inYears: {
		get: function () {
			return this / (1).years;
		}
	},
	inMonths: {
		get: function () {
			return this / (1).months;
		}
	},
	inDays: {
		get: function () {
			return this / (1).days;
		}
	},
	inHours: {
		get: function () {
			return this / (1).hours;
		}
	},
	inMinutes: {
		get: function () {
			return this / (1).minutes;
		}
	},
	inSeconds: {
		get: function () {
			return this / (1).seconds;
		}
	},

	// Date Operations
	fromNow: {
		value: function () {
			const result = Date.now() + this;
			return new Date(result);
		}
	},
	beforeNow: {
		value: function () {
			const result = Date.now() - this;
			return new Date(result);
		}
	},
	from: {
		value: function (date: Date) {
			const result = date.getTime() + this;
			return new Date(result);
		}
	},
	before: {
		value: function (date: Date) {
			const result = date.getTime() - this;
			return new Date(result);
		}
	},
	toDate: {
		value: function () {
			return new Date(this);
		}
	}
});

export default Number.prototype;
