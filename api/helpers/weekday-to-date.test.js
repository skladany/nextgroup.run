import { timeStringToArray, weekdayToDate } from "./weekday-to-date.js";

describe("Weekday to Date helper", () => {
  describe("Time: String to Array function", () => {
    it("converts Morning (AM) time", () => {
      expect(timeStringToArray("6:35AM")).toEqual([6, 35, 0, 0]);
    });
    it("converts Afternoon (PM) time", () => {
      expect(timeStringToArray("6:35AM")).toEqual([18, 35, 0, 0]);
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
