import { motion } from 'framer-motion'
import getEnglishEntry from '../../lib/get-english-entry'
import { PokemonItem } from '../../types/pokemon'
import Stats from '../stats'
import styles from './header.module.css'

type Props = {
  className: string
  pokemon: PokemonItem
}

const Header = ({ className, pokemon }: Props) => (
  <header className={className}>
    <motion.h1 className={styles.title} layoutId={`name-${pokemon.id}`}>
      {pokemon.formattedName}
    </motion.h1>
    <motion.div
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2>{getEnglishEntry(pokemon.species.genera).genus}</h2>
      <p>{getEnglishEntry(pokemon.species.flavor_text_entries).flavor_text}</p>
    </motion.div>
    <Stats pokemon={pokemon} />
  </header>
)

export default Header
