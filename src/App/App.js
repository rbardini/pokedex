import React, { useState, useEffect } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from '../pages/Home';
import './App.module.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { results } = await response.json();
    const pokemons = results.map((result, i) => ({
      ...result,
      // Workaround as there is no way to fetch sprite URLs without making one request per Pokémon :(
      sprite: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }));

    setPokemons(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={() => <Home pokemons={pokemons} />} />
    </Switch>
  );
}

export default App;
