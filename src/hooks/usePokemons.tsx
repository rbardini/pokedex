import { useState, useEffect } from 'react';

import { NamedAPIResource } from '../types/APIResource';
import formatName from '../utils/formatName';
import request from '../utils/request';

export interface PokemonListItem extends NamedAPIResource {
  formattedName: string;
  sprite: string;
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error>();

  const fetchPokemons = async (signal: AbortSignal) => {
    try {
      const { results }: { results: NamedAPIResource[] } = await request('pokemon/?limit=151', { signal });
      const pokemons = results.map((pokemon: NamedAPIResource, i: number) => ({
        ...pokemon,
        // Workaround to add formatted name and sprite URL without making extra requests per Pokémon
        formattedName: formatName(pokemon.name),
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
