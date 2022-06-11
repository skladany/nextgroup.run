/**
 * Convert human readable time to an array of int values,
 * suitable for use in Date.prototype.setHours()
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
 *
 * @param {string} time - In human readable format, e.g., "6:35AM"
 * @return {array}  - Returns time in int array of [hours, minutes, seconds, milliseconds]
 */
const timeStringToArray = (time) => {
  // am or pm?
  const isPM = time.toLowerCase().search("pm") > 0;

  // Remove am/pm
  // split via ":"
  // convert all to ints
  let [hours, minutes] = time
    .toLowerCase()
    .replace("pm", "")
    .replace("am", "")
    .split(":")
    .map((a) => parseInt(a));

  // Possibly convert hours to 24 hour clock
  if (isPM && hours !== 12) {
    hours += 12;
  } else if (!isPM && hours === 12) {
    // Check for Midnight edge case
    hours = 0;
  }

  // Throw errors for invalid times
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error("Invalid time");
  }

  return [hours, minutes, 0, 0];
};

const weekdayToDate = ({ weekday, time, now = new Date() }) => {
  const daysOfTheWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  console.log({ now });

  // Create new Date based on now
  const nextRun = now;

  // Set day to 1st of the month
  nextRun.setDate(1);

  // Set to proper start time
  nextRun.setHours(...hours(time));

  return nextRun;

  // Check day of the week matches Wed

  // If not, increment until it does
  // Verify Date is after Now
  // If not, add 7 to the date until it is

  // console.log(dayOfWeek);
  // expected output: 2

  // .toLocaleString("en-US", { timeZone: "America/New_York", });
};

export { timeStringToArray, weekdayToDate };
