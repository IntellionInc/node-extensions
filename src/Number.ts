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
			const a = 60;
			return this * a.seconds;
		}
	},
	hours: {
		get: function () {
			const a = 60;
			return this * a.minutes;
		}
	},
	days: {
		get: function () {
			const a = 24;
			return this * a.hours;
		}
	},
	months: {
		get: function () {
			const a = 30;
			return this * a.days;
		}
	},
	years: {
		get: function () {
			const a = 365;
			return this * a.days;
		}
	},

	// Time conversions from milliseconds
	inYears: {
		get: function () {
			const a = 1;
			return this / a.years;
		}
	},
	inMonths: {
		get: function () {
			const a = 1;
			return this / a.months;
		}
	},
	inDays: {
		get: function () {
			const a = 1;
			return this / a.days;
		}
	},
	inHours: {
		get: function () {
			const a = 1;
			return this / a.hours;
		}
	},
	inMinutes: {
		get: function () {
			const a = 1;
			return this / a.minutes;
		}
	},
	inSeconds: {
		get: function () {
			const a = 1;
			return this / a.seconds;
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
	}
});

export default Number.prototype;
