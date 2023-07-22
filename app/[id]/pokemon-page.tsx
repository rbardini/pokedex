'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Figure from '../../components/figure'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Moves from '../../components/moves'
import Profile from '../../components/profile'
import styles from '../../styles/[id].module.css'
import { PokemonItem } from '../../types/pokemon'

type Props = {
  pokemon: PokemonItem
}

const PokemonPage = ({ pokemon }: Props) => (
  <div>
    <Link href="/" className={styles.back}>
      ←
    </Link>

    <div className={styles.grid}>
      <span className={styles.number}>#{pokemon.id}</span>
      <Header className={styles.header} pokemon={pokemon} />
      <Figure className={styles.figure} pokemon={pokemon} />
      <motion.div
        className={styles.content}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Profile pokemon={pokemon} />
        <Moves pokemon={pokemon} />
      </motion.div>
    </div>

    <Footer />
  </div>
)

export default PokemonPage
