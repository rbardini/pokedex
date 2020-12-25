import { motion } from 'framer-motion'
import { PokemonListItem } from '../../types/pokemon'
import Cell from '../cell'
import styles from './grid.module.css'

type Props = {
  pokemons: PokemonListItem[]
}

const Grid = ({ pokemons }: Props) => (
  <motion.div className={styles.grid} layout>
    {pokemons.length > 0
      ? pokemons.map(pokemon => <Cell key={pokemon.name} pokemon={pokemon} />)
      : 'No Pokémon found'}
  </motion.div>
)

export default Grid
