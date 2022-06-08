// Find time to Next Wed Strider Run
// We know it's always on Wed at 6:30pm
const WEEKDAY = "Wednesday";
const TIME = "6:35AM";

// Convert TIME to hours array
const hours = (time) => {
  // am or pm?
  const increment = time.toLowerCase().search("pm") ? 12 : 0;
  console.log(increment);

  // @todo -- set up testing to figure this out // for coding this in general?
  // why is AM not AM?

  // Remove am/pm
  // split via ":"
  // convert all to ints
  const arr = time
    .toLowerCase()
    .replace("pm", "")
    .replace("am", "")
    .split(":")
    .map((a) => parseInt(a));

  return [arr[0] + increment, ...arr.slice(1), 0, 0];
};

const daysOfTheWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

// Get Date Now
const now = new Date();

console.log({ now });

// Create new Date based on now
const nextRun = now;

// // Set day to 1st of the month
nextRun.setDate(1);

// // Set to proper start time
nextRun.setHours(...hours(TIME));

console.log({ nextRun });

// Check day of the week matches Wed

// If not, increment until it does
// Verify Date is after Now
// If not, add 7 to the date until it is

// console.log(dayOfWeek);
// expected output: 2

// .toLocaleString("en-US", { timeZone: "America/New_York", });
