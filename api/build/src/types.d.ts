declare type WeekdayToDateSettings = {
    weekday: string;
    time: string;
    now?: Date;
};
interface StringToNumberMap {
    [index: string]: number;
}
export { WeekdayToDateSettings, StringToNumberMap };
