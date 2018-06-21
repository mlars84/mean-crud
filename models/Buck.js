const mongoose = require('mongoose')

const BuckSchema = new mongoose.Schema({
  name: String,
  jerseyNumber: Number,
  height: String,
  weight: String,
  DOB: Date,
  playoffStats: {
    ppg: String,
    rpg: String,
    apg: String
  }
})

module.exports = mongoose.model('Buck', BuckSchema)