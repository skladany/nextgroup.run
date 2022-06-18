import { WeekdayToDateSettings } from '../types';
/**
 * Convert human readable time to an array of int values,
 * suitable for use in Date.prototype.setHours()
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
 *
 * @param time - In human readable format, e.g., "6:35AM"
 * @return - Returns time in int array of [hours, minutes, seconds, milliseconds]
 */
declare const timeStringToArray: (time: string) => [number, number, number, number];
/**
 * Convert human readable Day & Time to Date object based on the current time
 *
 * @param weekday - In human readable format, e.g., "Friday"
 * @param time - In human readable format, e.g., "6:35AM"
 * @param [now] - Optional Date object of the current time. Used for unit testing.
 * @return - Returns time in Date object format
 */
declare const weekdayToDate: ({ weekday, time, now, }: WeekdayToDateSettings) => Date;
export { timeStringToArray, weekdayToDate };
