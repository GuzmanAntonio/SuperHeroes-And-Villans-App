const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Villain = require('./models/Villain')

const heroRoutes = require('./routes/heroes')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/SUPERHEROES_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/villains', (req, res) => {
  const {name, img, universe, nemesis} = req.body
  const newVillain = {name, img, universe, nemesis}
  Villain(newVillain).save((err, savedVillian) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', data: savedVillian })
    }
  })
})

app.get('/api/villains', (req, res) => {
  Villain.find((err, villains) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'SUCCESS', villains })
    }
  })
})

app.delete('/api/villains/:villainId', (req, res) => {
  const villainId = req.params.villainId
  Villain.remove({_id: villainId}, (err, villain) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: `Deleted: ${villain}` })
    }
  })
})

app.use('/', heroRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port}🔥`))

module.exports = server
