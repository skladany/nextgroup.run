type WeekdayToDateSettings = {
  weekday: string
  time: string
  now?: Date
}

// https://www.typescriptlang.org/docs/handbook/2/objects.html
interface StringToNumberMap {
  [index: string]: number
}

type Club = {
  id: number
  name: string
  abbreviation: string
  branch: string
  state: string
  website: string
  fb: string
  instagram: string
}

interface ClubsMap {
  [index: number]: Club
}

type Run = {
  run_id: string
  active: Boolean
  day: string
  time: string
  alt_time: string
  club: string | Club
  title: string
  startpoint: string
  google_map: string
  coords: number[]
  type: string
  distance: number[]
  fixed_route: Boolean
  route_link: string
  notes: string
  next_run: Date
}

export { WeekdayToDateSettings, StringToNumberMap, Club, ClubsMap, Run }
