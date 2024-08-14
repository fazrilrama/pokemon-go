const Pokemon = require('../models/pokemon');

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

exports.capturePokemon = (req, res) => {
    const success = Math.random() > 0.5;
    res.json({ success });
};

exports.releasePokemon = (req, res) => {
    const { id } = req.body;
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const success = isPrime(randomNum);
    if (success) {
        Pokemon.findByIdAndDelete(id, (err) => {
            if (err) return res.status(500).json({ error: 'Failed to release Pokemon' });
            res.json({ success: true });
        });
    } else {
        res.json({ success: false });
    }
};

exports.renamePokemon = async (req, res) => {
    const { id, newName } = req.body;
    const pokemon = await Pokemon.findById(id);
    const count = pokemon.nickname.match(/-(\d+)$/) ? parseInt(pokemon.nickname.match(/-(\d+)$/)[1]) + 1 : 0;
    const fibonacciSuffix = fibonacci(count);
    pokemon.nickname = `${newName}-${fibonacciSuffix}`;
    pokemon.save();
    res.json(pokemon);
};

exports.getMyPokemon = async (req, res) => {
    const myPokemon = await Pokemon.find({});
    res.json(myPokemon);
};
