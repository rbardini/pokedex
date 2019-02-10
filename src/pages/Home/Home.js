import React, { Fragment, useCallback, useState } from 'react';

import Grid from '../../components/Grid';
import SearchField from '../../components/SearchField';
import Spinner from '../../components/Spinner';
import usePokemons from '../../hooks/usePokemons';

const Home = () => {
  const { pokemons, isFetching } = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ formattedName }) =>
    !search || formattedName.toLowerCase().includes(search.toLowerCase()));

  const onSearchChange = useCallback(e => setSearch(e.target.value), []);

  return (
    isFetching ? (
      <Spinner />
    ) : (
      <Fragment>
        <SearchField onChange={onSearchChange} value={search} />
        <Grid pokemons={filteredPokemons} />
      </Fragment>
    )
  );
}

export default Home;
