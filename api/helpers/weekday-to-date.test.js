import { timeStringToArray, weekdayToDate } from "./weekday-to-date.js";

describe("Weekday to Date module", () => {
  // describe("Time: String to Array function", () => {
  //   it("converts morning (AM) time properly", () => {
  //     expect(timeStringToArray("6:35AM")).toEqual([6, 35, 0, 0]);
  //   });
  //   it("converts afternoon (PM) time properly", () => {
  //     expect(timeStringToArray("6:35PM")).toEqual([18, 35, 0, 0]);
  //   });
  //   it("converts one minute to midnight properly", () => {
  //     expect(timeStringToArray("11:59PM")).toEqual([23, 59, 0, 0]);
  //   });
  //   it("converts midnight properly", () => {
  //     expect(timeStringToArray("12:00AM")).toEqual([0, 0, 0, 0]);
  //   });
  //   it("converts one minute after midnight properly", () => {
  //     expect(timeStringToArray("12:01AM")).toEqual([0, 1, 0, 0]);
  //   });
  //   it("converts 1:00AM properly", () => {
  //     expect(timeStringToArray("01:00AM")).toEqual([1, 0, 0, 0]);
  //   });
  //   it("converts one minute to noon properly", () => {
  //     expect(timeStringToArray("11:59AM")).toEqual([11, 59, 0, 0]);
  //   });
  //   it("converts noon properly", () => {
  //     expect(timeStringToArray("12:00PM")).toEqual([12, 0, 0, 0]);
  //   });
  //   it("converts one minute after noon properly", () => {
  //     expect(timeStringToArray("12:01PM")).toEqual([12, 1, 0, 0]);
  //   });
  //   it("checks for invalid hours, too low", () => {
  //     expect(() => {
  //       timeStringToArray("-1:99PM");
  //     }).toThrow("Invalid time");
  //   });
  //   it("checks for invalid hour, too high", () => {
  //     expect(() => {
  //       timeStringToArray("24:00PM");
  //     }).toThrow("Invalid time");
  //   });
  //   it("checks for invalid minute, too low", () => {
  //     expect(() => {
  //       timeStringToArray("12:-01PM");
  //     }).toThrow("Invalid time");
  //   });
  //   it("checks for invalid minute, too high", () => {
  //     expect(() => {
  //       timeStringToArray("12:99PM");
  //     }).toThrow("Invalid time");
  //   });
  // });

  describe("Weekday to date function", () => {
    // NOW: Friday 6/10/2022 9:24:47am
    const NOW = new Date("2022-06-10T13:24:47.834Z");

    it("Friday 10:30AM (today)", () => {
      expect(
        weekdayToDate({
          weekday: "Friday",
          time: "10:30AM",
          now: NOW,
        }).toString()
      ).toBe("Fri Jun 10 2022 10:30:00 GMT-0400 (Eastern Daylight Time)");
    });

    it("Saturday 8:00AM (1 days later, this week)", () => {
      expect(
        weekdayToDate({
          weekday: "Saturday",
          time: "8:00AM",
          now: NOW,
        }).toString()
      ).toBe("Sat Jun 11 2022 08:00:00 GMT-0400 (Eastern Daylight Time)");
    });

    it("Wednesday 6:30PM (5 days later, next week)", () => {
      expect(
        weekdayToDate({
          weekday: "Wednesday",
          time: "6:30PM",
          now: NOW,
        }).toString()
      ).toBe("Wed Jun 15 2022 18:30:00 GMT-0400 (Eastern Daylight Time)");
    });
  });
});
