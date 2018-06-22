const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: String,
  jerseyNumber: Number,
  height: String,
  weight: String,
  DOB: String,
  playoffStats: {
    PPG: Number,
    RPG: Number,
    APG: Number
  }
})

module.exports = mongoose.model('Player', PlayerSchema)