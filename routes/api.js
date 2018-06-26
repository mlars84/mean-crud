const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/Player.js');

router.get('/', (req, res, next) => {
  Player.find((err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/:id', (req, res, next) => {  
  Player.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', (req, res, next) => {  
  Player.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', (req, res, next) => {  
  Player.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', (req, res, next) => {  
  Player.findByIdAndRemove(req.params.id, req.body, (err, post)  => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;