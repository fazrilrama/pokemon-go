const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    nickname: String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
