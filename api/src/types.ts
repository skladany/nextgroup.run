type WeekdayToDateSettings = {
  weekday: string
  time: string
  now?: Date
}

// https://www.typescriptlang.org/docs/handbook/2/objects.html
interface StringToNumberMap {
  [index: string]: number
}

interface Clubs {
  id: string
  name: string
  abbreviation: string
  branch: string
  state: string
  website: string
  fb: string
  instagram: string
}

export { WeekdayToDateSettings, StringToNumberMap, Clubs }
