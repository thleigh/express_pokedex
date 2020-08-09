var express = require('express');
var router = express.Router();
// Make sure to require your models in the files where they will be used.
var db = require('../models');
const { parse } = require('dotenv');
const { response } = require('express');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', (req, res) => { 

  let favPokemon = db.pokemon.findAll()

  // TODO: Get all records from the DB and render to view
  res.render('favorites', {pokemon: favPokemon})
  .catch(err => {
    console.log('Error:', err)
  });
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  db.pokemon.findOrCreate ({
    where: {name: req.body.name}
  })
  // TODO: Get form data and add a new record to DB
  res.redirect('/pokemon');
  })


module.exports = router;
