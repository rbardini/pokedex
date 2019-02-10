import { useState, useEffect } from 'react';

import formatName from '../utils/formatName';
import request from '../utils/request';

const usePokemon = name => {
  const [pokemon, setPokemon] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async (signal) => {
    try {
      const result = await request(`pokemon/${name}`, { signal });
      const pokemon = {
        ...result,
        formattedName: formatName(result.name),
        species: await request(`pokemon-species/${result.id}`, { signal }),
      }

      setPokemon(pokemon);
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

    fetchPokemon(signal);

    return () => controller.abort();
  }, [name]);

  return { pokemon, isFetching, error };
}

export default usePokemon;
