import { motion } from 'framer-motion'
import { Fragment } from 'react'
import utilStyles from '../../styles/utils.module.css'
import { PokemonItem } from '../../types/pokemon'
import StatBar from '../stat-bar'
import styles from './stats.module.css'

type Props = {
  pokemon: PokemonItem
}

const Stats = ({ pokemon }: Props) => (
  <motion.div
    className={styles.stats}
    initial={{ y: -8, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    {pokemon.stats.map(({ base_stat, stat }) => (
      <Fragment key={stat.name}>
        <span className={utilStyles.capitalize}>{stat.name}</span>
        <StatBar value={base_stat} />
        <span>{base_stat}</span>
      </Fragment>
    ))}
  </motion.div>
)

export default Stats
