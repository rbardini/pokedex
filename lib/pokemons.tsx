import { NamedAPIResource } from '../types/api-resource'
import { Pokemon, PokemonItem, PokemonListItem } from '../types/pokemon'
import { Species } from '../types/species'
import formatName from './format-name'
import request from './request'

export const POKEMON_COUNT = 151

export const getPokemons = async () => {
  const { results: pokemons } = await request<{ results: NamedAPIResource[] }>(
    `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_COUNT}`,
  )

  return pokemons.map((pokemon, i): PokemonListItem => {
    const id = i + 1

    return {
      ...pokemon,
      id,
      // Workaround to add formatted name and sprite URL without making extra requests per Pokémon
      formattedName: formatName(pokemon.name),
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
}

export const getPokemon = async (id: string) => {
  const pokemon = await request<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
  )
  const species = await request<Species>(pokemon.species.url)

  const item: PokemonItem = {
    ...pokemon,
    formattedName: formatName(pokemon.name),
    species,
  }

  return item
}
