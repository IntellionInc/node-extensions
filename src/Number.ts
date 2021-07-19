interface Number {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;

  inYears(): number;
  inMonths(): number;
  inDays(): number;
  inHours(): number;
  inMinutes(): number;
  inSeconds(): number;
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
  
  inYears: {
    value: function () {
      const a = 1;
      return this / a.years;
    },
  },
  inMonths: {
    value: function () {
      const a = 1;
      return this / a.months;
    },
  },
  inDays: {
    value: function () {
      const a = 1;
      return this / a.days;
    },
  },
  inHours: {
    value: function () {
      const a = 1;
      return this / a.hours;
    },
  },
  inMinutes: {
    value: function () {
      const a = 1;
      return this / a.minutes;
    },
  },
  inSeconds: {
    value: function () {
      const a = 1;
      return this / a.seconds;
    },
  },
});
