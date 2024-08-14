const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/capture', pokemonController.capturePokemon);
router.post('/release', pokemonController.releasePokemon);
router.post('/rename', pokemonController.renamePokemon);
router.get('/mypokemon', pokemonController.getMyPokemon);

module.exports = router;
