import { Club, ClubsMap } from '../types'
import csv from 'csvtojson'

export default async function Mappers(city: string) {
  const clubsCSV = `../data/${city}/clubs.csv`

  // Parse clubs data
  const clubs: Club[] = await csv().fromFile(clubsCSV)

  // Create map of data
  const clubsData: ClubsMap = {}
  clubs.forEach((data: Club) => (clubsData[data.id] = data as Club))

  // Helpers methods to parse the data; Possibly move these to another func
  const toBoolean = (item: string) => !!parseInt(item)
  const toArray = (item: string) => item.split(',').map(n => parseFloat(n))
  const toClub = (id: string) => clubsData[parseInt(id)]

  return { toBoolean, toArray, toClub }
}
