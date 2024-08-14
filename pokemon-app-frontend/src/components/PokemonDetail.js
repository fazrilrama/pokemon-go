import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../services/api';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [nickname, setNickname] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => setPokemon(response.data));
    }, [name]);

    const catchPokemon = () => {
        api.get('/capture').then((response) => {
            if (response.data.success) {
                const nicknamePrompt = prompt('Pokemon captured! Enter a nickname:');
                api.post('/rename', { id: pokemon.id, newName: nicknamePrompt })
                    .then((res) => setNickname(res.data.nickname));
                setMessage('Pokemon captured!');
            } else {
                setMessage('Failed to capture Pokemon!');
            }
        });
    };

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <button onClick={catchPokemon}>Catch</button>
            <p>{message}</p>
        </div>
    );
};

export default PokemonDetail;
