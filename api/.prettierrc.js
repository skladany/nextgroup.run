const settings = require('gts/.prettierrc.json')

settings.semi = false
settings.bracketSpacing = true

module.exports = {
  ...settings,
}
