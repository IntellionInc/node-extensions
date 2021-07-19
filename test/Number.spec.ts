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
});
