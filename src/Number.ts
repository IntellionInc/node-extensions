interface Number {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}

Object.defineProperties(Number.prototype, {
  seconds: {
    get: function () {
      return this * 1000;
    },
  },
  minutes: {
    get: function () {
      const a = 60;
      return this * a.seconds;
    },
  },
  hours: {
    get: function () {
      const a = 60;
      return this * a.minutes;
    },
  },
  days: {
    get: function () {
      const a = 24;
      return this * a.hours;
    },
  },
  months: {
    get: function () {
      const a = 30;
      return this * a.days;
    },
  },
  years: {
    get: function () {
      const a = 365;
      return this * a.days;
    },
  },
});
