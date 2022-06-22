import { Clubs } from '../types'
import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import csv from 'csvtojson'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const CITY = 'dc'
// const FILE = 'weekly'

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.send('OK Bob.')
})

app.get('/next-runs', async (req: Request, res: Response) => {
  // @todo, eventually an API query param
  // const now = Date.now()
  // const date = Date.now()
  // Injest data.csv files
  const clubsCSV = `data/${CITY}/clubs.csv`
  const weeklyCSV = `data/${CITY}/weekly.csv`

  // Parse clubs data
  const clubs: string[] = await csv().fromFile(clubsCSV)
  // Create map of data
  const clubsData: Clubs = {}
  clubs.forEach((data: string) => (clubsData[data.id] = data))
  // Helpers methods to parse the data
  const toBoolean = (item: string) => !!parseInt(item)
  const toArray = (item: string) => item.split(',').map(n => parseFloat(n))
  const toClub = (id: string) => clubsData[id]
  // Parse the weekly club data
  const weekly = await csv({
    colParser: {
      active: item => toBoolean(item),
      club: item => toClub(item),
      weekly: item => toBoolean(item),
      coords: item => toArray(item),
      distance: item => toArray(item),
      fixed_route: item => toBoolean(item),
    },
  }).fromFile(weeklyCSV)
  // console.log(weekly)
  // ouput single endpoint of the next 10 runs from now
  // Date may not be enough for this, use moment or another package?
  // console.log({ now })
  // console.log(new Date('Saturday 8am'))

  res.send(weekly)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
