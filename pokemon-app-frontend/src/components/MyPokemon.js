import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MyPokemon = () => {
    const [myPokemon, setMyPokemon] = useState([]);

    useEffect(() => {
        api.get('/mypokemon').then((response) => setMyPokemon(response.data));
    }, []);

    const releasePokemon = (id) => {
        api.post('/release', { id }).then((response) => {
            if (response.data.success) {
                setMyPokemon(myPokemon.filter((poke) => poke._id !== id));
            } else {
                alert('Failed to release Pokemon!');
            }
        });
    };

    return (
        <div>
            <h1>My Pokemon</h1>
            <ul>
                {myPokemon.map((poke) => (
                    <li key={poke._id}>
                        {poke.nickname} ({poke.name})
                        <button onClick={() => releasePokemon(poke._id)}>Release</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyPokemon;
