import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemon from './components/MyPokemon';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={PokemonList} />
                    <Route path="/pokemon/:name" component={PokemonDetail} />
                    <Route path="/mypokemon" component={MyPokemon} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
