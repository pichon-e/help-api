import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from './config'

const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env]

let sequelize = null

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, config)
} else {
  sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    logging: false,
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: 1,
      min: 0,
      idle: 100000,
      acquire: 100000
    },
    dialectOptions: {
      requestTimeout: 1000000
    }
  })
}

var db = {}

fs.readdirSync(path.join(__dirname, 'models'))
  .filter(function (file) {
    return (file.indexOf('.') !== 0)
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, '/models/', file))
    db[model.name] = model
  })

// RELATIONSHIPS

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
