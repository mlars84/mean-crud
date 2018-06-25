const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: String,
  jerseyNumber: Number,
  height: String,
  weight: String,
  DOB: String,
  playoffPPG: Number,
  playoffRPG: Number,
  playoffAPG: Number
})

module.exports = mongoose.model('Player', PlayerSchema)