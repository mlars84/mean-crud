const express = require('express')
const router = express.Router()
const Player = require('../models/Player')

router.get('/', (req, res, next) => {
  Player.find((err, body) => {
    if (err) return next(err)
    res.json(body)
  })
})

router.get('/:id', function(req, res, next) {
  Player.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

router.post('/', (req, res, next) => {
  Player.create(req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

router.put('/:id', function(req, res, next) {
  Player.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

router.delete('/:id', function(req, res, next) {
  Player.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router