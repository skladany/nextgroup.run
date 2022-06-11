import { timeStringToArray, weekdayToDate } from "./weekday-to-date.js";

describe("Weekday to Date helper", () => {
  describe("Time: String to Array function", () => {
    it("converts morning (AM) time properly", () => {
      expect(timeStringToArray("6:35AM")).toEqual([6, 35, 0, 0]);
    });
    it("converts afternoon (PM) time properly", () => {
      expect(timeStringToArray("6:35PM")).toEqual([18, 35, 0, 0]);
    });
    it("converts one minute to midnight properly", () => {
      expect(timeStringToArray("11:59PM")).toEqual([23, 59, 0, 0]);
    });
    it("converts midnight properly", () => {
      expect(timeStringToArray("12:00AM")).toEqual([0, 0, 0, 0]);
    });
    it("converts one minute after midnight properly", () => {
      expect(timeStringToArray("12:01AM")).toEqual([0, 1, 0, 0]);
    });
    it("converts 1:00AM properly", () => {
      expect(timeStringToArray("01:00AM")).toEqual([1, 0, 0, 0]);
    });
    it("converts one minute to noon properly", () => {
      expect(timeStringToArray("11:59AM")).toEqual([11, 59, 0, 0]);
    });
    it("converts noon properly", () => {
      expect(timeStringToArray("12:00PM")).toEqual([12, 0, 0, 0]);
    });
    it("converts one minute after noon properly", () => {
      expect(timeStringToArray("12:01PM")).toEqual([12, 1, 0, 0]);
    });
    it("checks for invalid hours, too low", () => {
      expect(timeStringToArray("-1:99PM")).toThrow("Invalid time");
    });
    it("checks for invalid hour, too high", () => {
      expect(timeStringToArray("24:00PM")).toThrow("Invalid time");
    });
    it("checks for invalid minute, too low", () => {
      expect(timeStringToArray("12:-01PM")).toThrow("Invalid time");
    });
    it("checks for invalid minute, too high", () => {
      expect(timeStringToArray("12:99PM")).toThrow("Invalid time");
    });
  });
});

// // NOW: Friday 6/10/2022 9:24:47am
// const NOW = new Date("2022-06-10T13:24:47.834Z");

// const WEEKDAY = "Wednesday";
// const TIME = "6:35AM";

// test("next Wed run (5 days away)", () => {
//   expect(
//     weekdayToDate({
//       weekday: WEEKDAY,
//       time: TIME,
//       now: NOW,
//     }).toString()
//   ).toBe("Wed Jun 01 2022 18:35:00 GMT-0400 (Eastern Daylight Time)");
// });
