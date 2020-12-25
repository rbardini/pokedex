const COLOR_MAP: Record<string, string> = {
  normal: '#a8a878',
  fire: '#f08030',
  fighting: '#c03028',
  water: '#6890f0',
  grass: '#78c850',
  poison: '#a040a0',
  electric: '#f8d030',
  ground: '#e0c068',
  rock: '#b8a038',
  bug: '#a8b820',
  dragon: '#7038f8',
  ghost: '#705898',
  dark: '#705848',
  fairy: '#ee99ac',
  steel: '#b8b8d0',
  psychic: '#f85888',
  ice: '#98d8d8',
  flying: '#a890f0',
}

const getTypeColor = (color: string) => COLOR_MAP[color]

export default getTypeColor
