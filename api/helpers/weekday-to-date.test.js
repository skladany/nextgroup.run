import weekdayToDate from "./weekday-to-date.js";

test("just get jest working", () => {
  expect(weekdayToDate().toString()).toBe(
    "Wed Jun 01 2022 18:35:00 GMT-0400 (Eastern Daylight Time)"
  );
});
