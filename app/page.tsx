import { Metadata } from 'next'
import { getPokemons } from '../lib/pokemons'
import HomePage from './home-page'

export const metadata: Metadata = {
  title: 'Pokédex',
}

const Page = async () => {
  const pokemons = await getPokemons()
  return <HomePage pokemons={pokemons} />
}

export default Page
