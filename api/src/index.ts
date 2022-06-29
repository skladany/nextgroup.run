import { Clubs, ClubsMap } from './types'
import { weekdayToDate } from './helpers/weekday-to-date'
import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import csv from 'csvtojson'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const CITIES = ['dc']

// const FILE = 'weekly'

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.send('OK Bob.')
})

app.get('/runs', async (req: Request, res: Response) => {
  const city = req.query.city ?? 'dc'

  if (!CITIES.find(c => c === city)) {
    // @see https://stackoverflow.com/questions/6123425/rest-response-code-for-invalid-data
    res.status(422).send('Invalid city')
  }

  // const page = req.query.page ?? 0
  // const date = req.query.page ?? Date.now()

  // Injest data.csv files
  const clubsCSV = `data/${city}/clubs.csv`
  const weeklyCSV = `data/${city}/weekly.csv`

  // Parse clubs data
  const clubs: Clubs[] = await csv().fromFile(clubsCSV)

  // Create map of data
  const clubsData: ClubsMap = {}
  clubs.forEach((data: Clubs) => (clubsData[data.id] = data as Clubs))

  // Helpers methods to parse the data; Possibly move these to another func
  const toBoolean = (item: string) => !!parseInt(item)
  const toArray = (item: string) => item.split(',').map(n => parseFloat(n))
  const toClub = (id: string) => clubsData[parseInt(id)]

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

  // 1. Filter by active runs
  // 2. Add `next_run` data
  // 3. Sort runs
  const nextRun: object = weekly
    .filter(run => run.active === true)
    .map(run => {
      run.next_run = weekdayToDate({ weekday: run.day, time: run.time })
      return run
    })
    .sort((a, b) => a.next_run - b.next_run)

  res.send(nextRun)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
