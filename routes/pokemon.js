var express = require('express');
var router = express.Router();
// Make sure to require your models in the files where they will be used.
var db = require('../models');
const { parse } = require('dotenv');
const { response } = require('express');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', (req, res) => { 

  let favPoke = db.pokemon.findAll()
  // TODO: Get all records from the DB and render to view
  res.send('Render a page of favorites here');
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

module.exports = router;
