const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/superheroes')
  .get((req, res) => {
    SuperHero.find((err, superHeroes) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', results: superHeroes })
      }
    })
  })

Router.route('/api/superheroes')
  .post((req, res) => {
    const {name, superPower, img, universe, nemesis} = req.body
    const newHero = {name, superPower, img, universe, nemesis}
    SuperHero(newHero).save((err, savedHero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedHero })
      }
    })
  })

Router.route('/api/superheroes/:heroId')
  .get((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `Found: ${heroId}`, data: hero })
      }
    })
  })

Router.route('/api/superheroes/:heroId')
  .delete((req, res) => {
    const heroId = req.params.heroId
    SuperHero.remove({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `Deleted: ${hero}` })
      }
    })
  })

module.exports = Router
