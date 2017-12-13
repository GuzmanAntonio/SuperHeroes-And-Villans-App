const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villian = new Schema({
  name: {type: String, required: true},
  superPower: String,
  img: {type: String, required: true},
  universer: String,
  nemesis: String,
})

module.exports = mongoose.model('Villian', Villian)