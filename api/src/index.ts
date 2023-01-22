import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import csv from 'csvtojson'

import { Run } from './types'
import Mappers from './mappers/mappers'
import { weekdayToDate } from './helpers/weekday-to-date'
import { monthlyToDate } from './helpers/monthly-to-date'

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
  const city = (req.query.city as string) ?? 'dc'

  if (!CITIES.find(c => c === city)) {
    // @see https://stackoverflow.com/questions/6123425/rest-response-code-for-invalid-data
    res.status(422).send('Invalid city')
  }

  // const page = req.query.page ?? 0
  // const date = req.query.page ?? Date.now()

  // Ingest data.csv files
  const weeklyCSV = `data/${city}/weekly.csv`
  const monthlyCSV = `data/${city}/monthly.csv`

  const { toBoolean, toArray, toClub } = await Mappers(city)

  // Parse the weekly club data
  const weeklyRuns = await csv({
    colParser: {
      active: item => toBoolean(item),
      club: item => toClub(item),
      weekly: item => toBoolean(item),
      coords: item => toArray(item),
      distance: item => toArray(item),
      fixed_route: item => toBoolean(item),
    },
  }).fromFile(weeklyCSV)

  // Parse the monthly club data
  const monthlyRuns = await csv({
    colParser: {
      active: item => toBoolean(item),
      club: item => toClub(item),
      weekly: item => toBoolean(item),
      coords: item => toArray(item),
      distance: item => toArray(item),
      fixed_route: item => toBoolean(item),
    },
  }).fromFile(monthlyCSV)

  // 1. Filter by active runs
  // 2. Add `next_run` data
  const nextWeeklyRuns: Run[] = weeklyRuns
    .filter(run => run.active === true)
    .map(run => {
      run.next_run = weekdayToDate({ weekday: run.day, time: run.time })
      return run
    })

  // 1. Filter by active runs
  // 2. Add `next_run` date
  const nextMonthlyRuns: Run[] = monthlyRuns
    .filter(run => run.active === true)
    .map(run => {
      run.next_run = monthlyToDate({ weekday: run.day, time: run.time })
      return run
    })

  // Merge & Sort runs
  const nextRuns: Run[] = [...nextWeeklyRuns, ...nextMonthlyRuns].sort(
    (a, b) => a.next_run.getTime() - b.next_run.getTime()
  )

  res.send(nextRuns)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
