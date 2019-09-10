import express from 'express'

const router = express.Router()

router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      message: '',
      type: 'invalid_token'
    })
  }
})

export default router
