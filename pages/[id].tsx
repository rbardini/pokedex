import { motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Figure from '../components/figure'
import Footer from '../components/footer'
import Header from '../components/header'
import Moves from '../components/moves'
import Profile from '../components/profile'
import { getPokemon, POKEMON_COUNT } from '../lib/pokemons'
import styles from '../styles/[id].module.css'
import { PokemonItem } from '../types/pokemon'

type Params = {
  id: string
}

type Props = {
  pokemon: PokemonItem
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const ids = [...Array(POKEMON_COUNT).keys()].map(i => i + 1)

  return {
    paths: ids.map(id => ({ params: { id: `${id}` } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const pokemon = await getPokemon(params!.id)

  return {
    props: { pokemon },
  }
}

const Page = ({ pokemon }: Props) => (
  <div>
    <Head>
      <title>{pokemon.formattedName}</title>
      <link rel="icon" href={pokemon.sprites.front_default} />
    </Head>

    <Link href="/">
      <a className={styles.back}>←</a>
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

export default Page
