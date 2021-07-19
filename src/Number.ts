declare global {
  interface Number {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;

    inYears: number;
    inMonths: number;
    inDays: number;
    inHours: number;
    inMinutes: number;
    inSeconds: number;

    fromNow(): Date;
    beforeNow(): Date;
    from(date: Date): Date;
    before(date: Date): Date;
  }
}

Object.defineProperties(Number.prototype, {
  // Time conversions to milliseconds
  seconds: {
    get: function () {
      return this * 1000;
    },
  },
  minutes: {
    get: function () {
      let a = 60;
      return this * a.seconds;
    },
  },
  hours: {
    get: function () {
      let a = 60;
      return this * a.minutes;
    },
  },
  days: {
    get: function () {
      let a = 24;
      return this * a.hours;
    },
  },
  months: {
    get: function () {
      let a = 30;
      return this * a.days;
    },
  },
  years: {
    get: function () {
      let a = 365;
      return this * a.days;
    },
  },

  // Time conversions from milliseconds
  inYears: {
    get: function () {
      let a = 1;
      return this / a.years;
    },
  },
  inMonths: {
    get: function () {
      let a = 1;
      return this / a.months;
    },
  },
  inDays: {
    get: function () {
      let a = 1;
      return this / a.days;
    },
  },
  inHours: {
    get: function () {
      let a = 1;
      return this / a.hours;
    },
  },
  inMinutes: {
    get: function () {
      let a = 1;
      return this / a.minutes;
    },
  },
  inSeconds: {
    get: function () {
      let a = 1;
      return this / a.seconds;
    },
  },

  // Date Operations
  fromNow: {
    value: function () {
      const result = Date.now() + this;
      return new Date(result);
    },
  },
  beforeNow: {
    value: function () {
      const result = Date.now() - this;
      return new Date(result);
    },
  },
  from: {
    value: function (date: Date) {
      const result = date.getTime() + this;
      return new Date(result);
    },
  },
  before: {
    value: function (date: Date) {
      const result = date.getTime() - this;
      return new Date(result);
    },
  },
});

export default Number.prototype;