import "../src/Number.ts";

describe("Number", () => {
  describe("seconds", () => {
    let input = 1;
    let output = 1000;
    it("should hold the value converted from seconds to milliseconds", () => {
      expect(input.seconds).toBe(output);
    });
  });
  describe("minutes", () => {
    let input = 1;
    let output = 60000;
    it("should hold the value converted from minutes to milliseconds", () => {
      expect(input.minutes).toBe(output);
    });
  });
  describe("hours", () => {
    let input = 1;
    let output = 3600000;
    it("should hold the value converted from hours to milliseconds", () => {
      expect(input.hours).toBe(output);
    });
  });
  describe("days", () => {
    let input = 1;
    let output = 86400000;
    it("should hold the value converted from days to milliseconds", () => {
      expect(input.days).toBe(output);
    });
  });
  describe("months", () => {
    let input = 1;
    let output = 2592000000;
    it("should hold the value converted from months to milliseconds", () => {
      expect(input.months).toBe(output);
    });
  });
  describe("years", () => {
    let input = 1;
    let output = 31536000000;
    it("should hold the value converted from years to milliseconds", () => {
      expect(input.years).toBe(output);
    });
  });

  describe("inYears", () => {
    let input = 31536000000;
    let output = 1;
    it("should convert the value from milliseconds to years", () => {
      expect(input.inYears()).toBe(output);
    });
  });
  describe("inMonths", () => {
    let input = 2592000000;
    let output = 1;
    it("should convert the value from milliseconds to months", () => {
      expect(input.inMonths()).toBe(output);
    });
  });
  describe("inDays", () => {
    let input = 31536000000;
    let output = 365;
    it("should convert the value from milliseconds to days", () => {
      expect(input.inDays()).toBe(output);
    });
  });
  describe("inHours", () => {
    let input = 31536000000;
    let output = 365 * 24;
    it("should convert the value from milliseconds to hours", () => {
      expect(input.inHours()).toBe(output);
    });
  });
  describe("inMinutes", () => {
    let input = 31536000000;
    let output = 365 * 24 * 60;
    it("should convert the value from milliseconds to minutes", () => {
      expect(input.inMinutes()).toBe(output);
    });
  });
  describe("inSeconds", () => {
    let input = 31536000000;
    let output = 365 * 24 * 60 * 60;
    it("should convert the value from milliseconds to seconds", () => {
      expect(input.inSeconds()).toBe(output);
    });
  });
});
