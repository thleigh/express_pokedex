var express = require('express');
var router = express.Router();
// Make sure to require your models in the files where they will be used.
var db = require('../models');
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
router.post('/', async (req, res) => {
  await db.pokemon.findOrCreate ({
    where: {name: req.body.name}
  })
  .then((response) => { 
    res.redirect('/pokemon');
  })
  // TODO: Get form data and add a new record to DB
  })


module.exports = router;
