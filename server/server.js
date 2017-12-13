const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')
const Villians = require('./models/Villians')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/superHeroes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/heroes', (req, res) => {
  console.log('end point found')
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}

  SuperHero (newHero).save((err, savedPost) => {
    if(err){
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', data: savedPost})
    }
  })
})

app.get('/api/heroes', (req, res) => {
  SuperHero.find((err, heroes) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', heroes})
    }
  })
})

app.get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err){
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', hero})
    }
  })
})

app.delete('/api/heroes/:heroId', (req, res) => {
  const deleteHero = req.params.heroId
  SuperHero.remove({_id: deleteHero},  (err, hero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: `DELETED, ${hero}` })
    }
  })
})

//////////////// VILLIANS//////////////////

app.post('/api/villains', (req, res) => {
  console.log('end point found')
  const {name, superPower, img, universe, nemesis} = req.body
  const newVillain = {name, superPower, img, universe, nemesis}

  Villains (newVillain).save((err, savedPost) => {
    if(err){
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', data: savedPost})
    }
  })
})

app.get('/api/villains', (req, res) => {
  Villians.find((err, villains) => {
    if(err){
      res.json({error: err})
    }else{
      res.json({msg: 'SUCCESS', villains})
    }
  })
})

app.get('/api/villains/:villainId', (req, res) => {
  const villainId = req.parans.villainId
  Villians.findById({_id: villainId}, (err, villain) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', villain})
    }
  })
})

app.delete('/api/villains/:villainId', (req, res) => {
  const deleteVillain = req.params.villainId
  Villain.remove({_id: deleteVillain}, (err, villain) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: `DELTED: ${villian}`})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 🤖 🤖 🤖`))

module.exports = server
