# dc.nextgroup.run

A simple webapp to list the next available runs in a given area

## Architectural Notes / changelog

A running log of my architectural decisions, as I build out this app.

# TODO

- [ ] Finishing creating main endpoint that shows the next 10 runs from now

# 2022-06-20

- [ ] Figure out how to set up [express w/ typescript](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

# 2022-06-19

- [x] More configuration, getting prettier to work how I want

# 2022-06-18

- [x] (Actually) to figure out best way to use `jest` with `TypeScript`
  - So far ...I'm finding **TypeScript** to be a _lot_ of extra work for not necessarily much gain.
  - **Jest** is proving to be very useful -- but adding **TypeScript** seems a bit repetitive, as the _type_ of errors that **TypeScript** will catch seem to be likely caught by `jest` tests.
  - However, now that the configuration is out of the way hopefully writing new code with **TypeScript** will prove to be more easier and less error prone. We'll see!

# 2022-06-17

- [x] (Try) to figure out best way to use `jest` with `TypeScript`

# 2022-06-16

- [x] Continue adding types to [../api/weekday-to-date.js](../api/weekday-to-date.js)
- [x] Figure out/ understand `type` better and how to initialize them;
- [x] Move `types` and `CONSTANTS` to their own files

# 2022-06-15

- [x] Continue adding types to [../api/weekday-to-date.js](../api/weekday-to-date.js)
  - Adding types to destructured object parameters is quite confusing, but [this blog post](https://mariusschulz.com/blog/typing-destructured-object-parameters-in-typescript) helped to clear things up.

# 2022-06-14

- [x] Figure out TypeScript dev setup
- [x] Start adding types to [../api/weekday-to-date.js](../api/weekday-to-date.js)

# 2022-06-13

- [x] Continues tests for `weekdayToDate`
- [x] Add TypeScript
  - Followed the instructions from [here](https://www.digitalocean.com/community/tutorials/typescript-new-project) which also recommend setting up Google TypeScript Linter

# 2022-06-12

- [x] Writing tests for `weekdayToDate`
  - TDD really is great. I'm finding errors I never would have expected in my code, in a much more systematic why then if I were simply manually testing cases and using `console.log`

# 2022-06-11

- [x] Added lots of tests for `timeStringToArray`!

# 2022-06-10

- [x] Actually write some useful **Jest** tests and finish up `weekday-to-date.js` helper function
  - I see the benefit of unit testing! I thought I that all the possible edge cases then quickly discovered
    more I had not solved for after writing tests for the `timeStringToArray` function

# 2022-06-09

- [x] Figure out how to show the next X runs based on a given time

  - Harder than it seems -- My data has a given Day and Time, but translating that into a JavaScript `Date()` is a not so straightforward
  - As such, I've written an initial mockup of a possible solution in [../api/weekday-to-date.js](../api/weekday-to-date.js)

- [x] Add **Jest** to test out the solution in `date.js`

  - It's become clear that testing out the `weekday-to-date.js` with CONSTANT variables is tedious and error-prone -- I should be using unit testing!
  - Installed **Jest**, easy. ...but then quickly realized **Jest** does not yet support es6 modules! Solved this with a quick search on [stackoverflow](https://stackoverflow.com/a/59481773/1940013) with the help of **Babel**

# 2022-06-08

- [x] Start a _running_ log (get it?)

* I started this log to better track my architectural decisions

## 2022-06-07

- [x] Register `.run` domain! Ideally generic, and use the subdomain for `dc`

* I asked my friends, and eventually settled on `nextgroup.run`
* Interestingly, all my _run_ friends preferred `nextclub.run`, however I think "group" is more approachable to the non-runner
* So, naturally I registered both. =|

## 2022-06-03

- [x] Create an initial mock API

* Initial implementation in [../api/index.js](../api/index.js)
* Initially, I see a simple API that just returns the data for the next X runs
* However, I'd like this data to be in JSON format to be easily ingestible by the React frontend
* Using a simply node packages (csvtojson) I've merged the data from `clubs.csv` and `weekly.csv` into one endpoint, such that the `club` data is a child of the a given run
  - While this is slightly repetitive, it allows for a "dumber" frontend, that simply views the data it's given with less processing required

## 2022-06-01

- [x] Compile an initial list of runs in DC, in a spreadsheet to start

* The hardest part of this app is the data collection, and formalizing that data
* To facilitate that, I've settled on simply using CSV files _(exported via Google Sheets)_ in this initial version. This gives me a simple and easy interface to collect data on new runs. _(If I later crowdsource new runs, it also gives me an easy way to set up a google form that sends data to a spreadsheet.)_
* In time, this could be expanded to an actual Admin interface to enter this data
* The format of this data may need to change with time, but for now i've setting on what you see in the `data/dc` directory, namely two files:
  - `clubs.csv`: The various run clubs, with their contact links. Each club has a unique id. _(For now, simply numerical)_
  - `weekly.csv`: The actual runs, with the relevant information _(length, time, occurrence, etc)_
