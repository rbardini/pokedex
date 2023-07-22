'use client'

import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Footer from '../components/footer'
import Grid from '../components/grid'
import SearchField from '../components/search-field'
import { PokemonListItem } from '../types/pokemon'

type Props = {
  pokemons: PokemonListItem[]
}

const HomePage = ({ pokemons }: Props) => {
  const router = useRouter()
  const params = useParams()
  const [search, setSearch] = useState<string>()
  const onSearchChange = useCallback(
    (value: string) => {
      router.replace(`/#${value}`)
      setSearch(value)
    },
    [router],
  )

  useEffect(() => {
    if (search == null) {
      const hash = window.location.hash.slice(1)
      if (hash) setSearch(hash)
    }

    document.title = [search, 'Pokédex'].filter(Boolean).join(' - ')
  }, [search, params])

  const filteredPokemons = pokemons.filter(
    ({ formattedName }) =>
      !search || formattedName.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <SearchField onChange={onSearchChange} value={search} />
      <Grid pokemons={filteredPokemons} />

      <Footer />
    </div>
  )
}

export default HomePage
