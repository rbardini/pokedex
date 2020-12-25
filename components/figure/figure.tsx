import classNames from 'classnames'
import { motion } from 'framer-motion'
import getTypeColor from '../../lib/get-type-color'
import { PokemonItem } from '../../types/pokemon'
import Tag from '../tag'
import styles from './figure.module.css'

type Props = {
  className?: string
  pokemon: PokemonItem
}

const Figure = ({ className, pokemon }: Props) => (
  <figure className={classNames(styles.figure, className)}>
    <motion.img
      className={styles.sprite}
      src={pokemon.sprites.front_default}
      alt=""
      layoutId={`pic-${pokemon.id}`}
    />
    <figcaption>
      {pokemon.types.map(({ type }) => (
        <Tag
          key={type.name}
          style={{ backgroundColor: getTypeColor(type.name), color: '#fff' }}
        >
          {type.name}
        </Tag>
      ))}
    </figcaption>
  </figure>
)

export default Figure
