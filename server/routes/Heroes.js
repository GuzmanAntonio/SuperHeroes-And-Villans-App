const express = require('require')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/heroes')
  .get((req, res) => {
      SuperHero.find((err, superHeroes) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', superHeroes })
        }
      })
    })

Router.route('/api/heroes')
  .post('/api/heroes', (req, res) => {
    const {name, superPower, img, universe, nemesis} = req.body
    const newHero = {name, superPower, img, universe, nemesis}
    SuperHero(newHero).save((err, savedHero) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedHero})
      }
    })
  })

Router.route('/api/heroes')  
  .get('/api/heroes', (req, res) => {
    SuperHero.find((err, superHeroes) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', superHeroes })
      }
    })
  })

Router.route('/api/heroes')
  .delete('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
    SuperHero.remove({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err })
      } else {
       res.json({ msg: `Deleted: ${hero}` })
      }
    })
  })
  
Router.route('/api/heroes')
  .get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
    SuperHero.findById({_id: heroId}, (err, hero) => {
      if (err) {
        res.json({ error: err})
      } else {
        res.json({ msg: `Found: ${heroId}`, hero })
      }
    })
  })


module.exports = Router