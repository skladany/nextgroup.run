"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekdayToDate = exports.timeStringToArray = void 0;
const constants_1 = require("../constants");
/**
 * Convert human readable time to an array of int values,
 * suitable for use in Date.prototype.setHours()
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
 *
 * @param time - In human readable format, e.g., "6:35AM"
 * @return - Returns time in int array of [hours, minutes, seconds, milliseconds]
 */
const timeStringToArray = (time) => {
    // am or pm?
    const isPM = time.toLowerCase().search('pm') > 0;
    // Remove am/pm
    // split via ":"
    // convert all to ints
    const timeParts = time
        .toLowerCase()
        .replace('pm', '')
        .replace('am', '')
        .split(':')
        .map(a => parseInt(a));
    let hours = timeParts[0];
    const minutes = timeParts[1];
    // Possibly convert hours to 24 hour clock
    if (isPM && hours !== 12) {
        hours += 12;
    }
    else if (!isPM && hours === 12) {
        // Check for Midnight edge case
        hours = 0;
    }
    // Throw errors for invalid times
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error('Invalid time');
    }
    return [hours, minutes, 0, 0];
};
exports.timeStringToArray = timeStringToArray;
/**
 * Convert human readable Day & Time to Date object based on the current time
 *
 * @param weekday - In human readable format, e.g., "Friday"
 * @param time - In human readable format, e.g., "6:35AM"
 * @param [now] - Optional Date object of the current time. Used for unit testing.
 * @return - Returns time in Date object format
 */
const weekdayToDate = ({ weekday, time, now = new Date(), }) => {
    // Get weekday as integer
    const runDayOfWeek = constants_1.DAYS_OF_THE_WEEK[weekday.toLowerCase()];
    // Verify bounds
    if (runDayOfWeek === null ||
        runDayOfWeek === undefined ||
        runDayOfWeek < 0 ||
        runDayOfWeek > 6) {
        throw new Error('Invalid data');
    }
    // Create new Date based on now
    const nextRun = now;
    // Check day of the week matches Wed
    const currentDayOfWeek = nextRun.getDay();
    if (currentDayOfWeek !== runDayOfWeek) {
        // Figure out how many days until
        // If negative, it's next week, so add 7
        let daysUntil = runDayOfWeek - currentDayOfWeek;
        if (daysUntil < 0)
            daysUntil += 7;
        // Set to the new date
        nextRun.setDate(now.getDate() + daysUntil);
    }
    // Set to proper start time
    nextRun.setHours(...timeStringToArray(time));
    return nextRun;
};
exports.weekdayToDate = weekdayToDate;
//# sourceMappingURL=weekday-to-date.js.map