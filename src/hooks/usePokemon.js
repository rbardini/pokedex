import { useState, useEffect } from 'react';

import formatName from '../utils/formatName';
import request from '../utils/request';

const usePokemon = name => {
  const [pokemon, setPokemon] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const fetchPokemon = async () => {
    const result = await request(`pokemon/${name}`);
    const pokemon = {
      ...result,
      formattedName: formatName(result.name),
    }

    setPokemon(pokemon);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  return [pokemon, isFetching];
}

export default usePokemon;
