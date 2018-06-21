const express = require('express')
const router = express.Router()
const Buck = require('../models/Buck')

router.get('/', (req, res, next) => {
  Buck.find((err, body) => {
    if (err) return next(err)
    res.json(body)
  })
})

router.post('/', (req, res, next) => {
  Buck.create(req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router