import { useState, useEffect } from 'react';

import formatName from '../utils/formatName';
import request from '../utils/request';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemons = async (signal) => {
    try {
      const { results } = await request('pokemon/?limit=151', { signal });
      const pokemons = results.map((pokemon, i) => ({
        ...pokemon,
        formattedName: formatName(pokemon.name),
        // Workaround to add sprite URL without making one extra request per Pokémon
        sprite: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
      }));

      setPokemons(pokemons);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    }

    setIsFetching(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchPokemons(signal);

    return () => controller.abort();
  }, []);

  return { pokemons, isFetching, error };
}

export default usePokemons;
