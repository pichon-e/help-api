import models from '../../database'
import express from 'express'

let debug = require('debug')('route.commissariat')

const router = express.Router()

router.route('/')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next()
  })
  .get((req, res, next) => {
    models.commissariat.findAll().then((commissariat) => {
      res.json(commissariat)
    }).catch((err) => {
      debug(err)
      res.json(err)
    })
  })

export default router
