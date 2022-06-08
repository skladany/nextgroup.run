# Architectural Notes

A running log of my architectural decisions, as I build out this app.

## 2022-06-01

- [x] Compile an initial list of runs in DC, in a spreadsheet to start

* The hardest part of this app is the data collection, and formalizing that data
* To facilitate that, I've settled on simply using CSV files _(exported via Google Sheets)_ in this initial version. This gives me a simple and easy interface to collect data on new runs. _(If I later crowdsource new runs, it also gives me an easy way to set up a google form that sends data to a spreadsheet.)_
* In time, this could be expanded to an actual Admin interface to enter this data
* The format of this data may need to change with time, but for now i've setting on what you see in the `data/dc` directory, namely two files:
  - `clubs.csv`: The various run clubs, with their contact links. Each club has a unique id. _(For now, simply numerical)_
  - `weekly.csv`: The actual runs, with the relevant information _(length, time, occurrence, etc)_

## 2022-06-03

- [x] Create an initial mock API

* Initial implementation in (./api/index.js)[./api/index.js]
* Initially, I see a simple API that just returns the data for the next X runs
* However, I'd like this data to be in JSON format to be easily ingestible by the React frontend
* Using a simply node packages (csvtojson) I've merged the data from `clubs.csv` and `weekly.csv` into one endpoint, such that the `club` data is a child of the a given run
  - While this is slightly repetitive, it allows for a "dumber" frontend, that simply views the data it's given with less processing required

## 2022-06-07

- [x] Register `.run` domain! Ideally generic, and use the subdomain for `dc`

* I asked my friends, and eventually settled on `nextgroup.run`
* Interestingly, all my _run_ friends preferred `nextclub.run`, however I think "group" is more approachable to the non-runner
* So, naturally I registered both. =|

# 2022-06-08

- [x] Start a _running_ log (get it?)

* I started this log to better track my architectural decisions

# TODO

- [ ] Figure out how to show the next X runs based on a given time

  - Hard than it seems -- My data has a given Day and Time, but translating that into a JavaScript `Date()` is a not so straightforward
  - As such, I've written an initial mockup of a possible solution in `date.js`

- [ ] Add `jest` to test out the solution in `date.js`
