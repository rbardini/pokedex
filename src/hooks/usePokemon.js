import { useState, useEffect } from 'react';

import request from '../utils/request';

const usePokemon = name => {
  const [pokemon, setPokemon] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const fetchPokemon = async () => {
    const pokemon = await request(`pokemon/${name}`);

    setPokemon(pokemon);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  return [pokemon, isFetching];
}

export default usePokemon;
