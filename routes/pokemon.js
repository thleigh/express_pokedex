var express = require('express');
var router = express.Router();
// Make sure to require your models in the files where they will be used.
var db = require('../models');
let axios = require('axios');

const { parse } = require('dotenv');
const { response } = require('express');



// GET /pokemon - return a page with favorited Pokemon
router.get('/', (req, res) => { 

  let favPokemon =  db.pokemon.findAll()
  .then((fav) => {

  // TODO: Get all records from the DB and render to view
  res.render('favorites', {pokemon: fav})
  })

});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  db.pokemon.findOrCreate ({
    where: {name: req.body.name}
  })
  .then(function() { 
    res.redirect('/pokemon');
  })
  // TODO: Get form data and add a new record to DB
  })

router.delete('/',  (req, res) => {
  db.pokemon.destroy({
    where: {name: req.body.name}
    })
    .then(function() {
      res.redirect('/pokemon');
    })
})

router.get('/:name', (req, res) => {
  if(req.params.name) {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${req.params.name.toLowerCase()}`)
    .then(response => {
      let pokemonData = response.data;
      res.render('show', {pokemon: pokemonData})
    })
  }
})

module.exports = router;
