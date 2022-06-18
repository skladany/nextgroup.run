type WeekdayToDateSettings = {
  weekday: string;
  time: string;
  now?: Date;
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html
interface StringToNumberMap {
  [index: string]: number;
}

export {WeekdayToDateSettings, StringToNumberMap};
