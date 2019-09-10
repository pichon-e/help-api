import '@babel/polyfill'
import app from './http'
import db from './database'

const debug = require('debug')('init')
const env = process.env.NODE_ENV || 'development'
const PORT = Number(process.env.PORT) || 3010

db.sequelize.authenticate()
  .then(() => {
    debug('Connection to DB successful.')
    app.listen(PORT, () => {
      debug(`Starting app in ${env} mode on port ${PORT}.`)
    })
  })
  .catch(err => {
    debug('Unable to connect to the database', err)
  })
