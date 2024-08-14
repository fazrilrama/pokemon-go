import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((response) => setPokemon(response.data.results));
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemon.map((poke, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${poke.name}`}>{poke.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
