import { Metadata } from 'next'
import { POKEMON_COUNT, getPokemon } from '../../lib/pokemons'
import PokemonPage from './pokemon-page'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const pokemon = await getPokemon(params.id)

  return {
    title: pokemon.formattedName,
    icons: pokemon.sprites.front_default,
  }
}

export const generateStaticParams = async () => {
  const ids = [...Array(POKEMON_COUNT).keys()].map(i => String(i + 1))
  return ids.map(id => ({ id }))
}

const Page = async ({ params }: Props) => {
  const pokemon = await getPokemon(params.id)
  return <PokemonPage pokemon={pokemon} />
}

export default Page
