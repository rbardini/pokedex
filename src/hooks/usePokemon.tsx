import { useState, useEffect } from 'react';

import { Pokemon } from '../types/Pokemon';
import { Species } from '../types/Species';
import formatName from '../utils/formatName';
import request from '../utils/request';

export interface PokemonItem extends Pick<Pokemon, Exclude<keyof Pokemon, 'species'>> {
  formattedName: string;
  species: Species;
}

const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonItem>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error>();

  const fetchPokemon = async (signal: AbortSignal) => {
    try {
      const result: Pokemon = await request(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal });
      const species: Species = await request(result.species.url, { signal });
      const pokemon = {
        ...result,
        formattedName: formatName(result.name),
        species,
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
