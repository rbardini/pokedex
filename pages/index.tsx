import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Grid from '../components/grid'
import SearchField from '../components/search-field'
import { getPokemons } from '../lib/pokemons'
import { PokemonListItem } from '../types/pokemon'

type Props = {
  pokemons: PokemonListItem[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pokemons = await getPokemons()

  return {
    props: { pokemons },
  }
}

const Page = ({ pokemons }: Props) => {
  const [search, setSearch] = useState('')

  const filteredPokemons = pokemons.filter(
    ({ formattedName }) =>
      !search || formattedName.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchField onChange={setSearch} value={search} />
      <Grid pokemons={filteredPokemons} />
    </div>
  )
}

export default Page
