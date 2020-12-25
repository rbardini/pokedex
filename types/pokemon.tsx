import { NamedAPIResource } from './api-resource'
import { Species } from './species'

export type PokemonItem = Pick<Pokemon, Exclude<keyof Pokemon, 'species'>> & {
  formattedName: string
  species: Species
}

export type PokemonListItem = NamedAPIResource &
  Pick<Pokemon, 'id'> & {
    formattedName: string
    sprite: string
  }

export type Pokemon = {
  abilities: Ability[]
  base_experience: number
  forms: NamedAPIResource[]
  game_indices: GameIndex[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: NamedAPIResource
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export type Ability = {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

export type HeldItem = {
  item: NamedAPIResource
  version_details: HeldItemVersion
}

export type HeldItemVersion = {
  version: NamedAPIResource
  rarity: number
}

export type GameIndex = {
  game_index: number
  version: NamedAPIResource
}

export type Move = {
  move: NamedAPIResource
  version_group_details: VersionGroupDetail[]
}

export type VersionGroupDetail = {
  level_learned_at: number
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
}

export type Sprites = {
  back_default: string
  back_female?: string
  back_shiny?: string
  back_shiny_female?: string
  front_default: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string
}

export type Stat = {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

export type Type = {
  slot: number
  type: NamedAPIResource
}
