const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})

// import * as express from 'express'

// // create our Express app
// const app = express()

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   next()
// })

// app.get('/', async (req, res) => {
//   res.send('OK Bob.')
// })

// const CITY = 'dc'
// const FILE = 'weekly'

// // @todo, eventually an API query param
// const now = Date.now()
// const date = Date.now()

// // Injest data.csv files
// const clubsCSV = `data/${CITY}/clubs.csv`
// const weeklyCSV = `data/${CITY}/weekly.csv`

// const csv = require('csvtojson')

// // Parse clubs data
// const clubs = await csv().fromFile(clubsCSV)

// // Create map of data
// const clubsData = {}
// clubs.forEach(data => (clubsData[data.id] = data))

// // Helpers methods to parse the data
// const toBoolean = item => !!parseInt(item)
// const toArray = item => item.split(',').map(n => parseFloat(n))
// const toClub = id => clubsData[id]

// // Parse the weekly club data
// const weekly = await csv({
//   colParser: {
//     active: item => toBoolean(item),
//     club: item => toClub(item),
//     weekly: item => toBoolean(item),
//     coords: item => toArray(item),
//     distance: item => toArray(item),
//     fixed_route: item => toBoolean(item),
//   },
// }).fromFile(weeklyCSV)

// console.log(weekly)

// ouput single endpoint of the next 10 runs from now
// Date may not be enough for this, use moment or another package?

// console.log({ now });
// console.log(new Date("Saturday 8am"));
