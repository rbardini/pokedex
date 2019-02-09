import React, { useState, useEffect } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from '../pages/Home';
import Details from '../pages/Details';
import './App.module.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { results } = await response.json();
    const pokemons = results.map((result, i) => ({
      ...result,
      // Workaround as there is no way to fetch sprite URLs without making one request per Pokémon :(
      sprite: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }));

    setPokemons(pokemons);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={() => <Home isLoading={isLoading} pokemons={pokemons} />} />
      <Route exact path="/:name" component={Details} />
    </Switch>
  );
}

export default App;
