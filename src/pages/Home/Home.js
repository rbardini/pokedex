import React, { useCallback, useState } from 'react';

import Grid from '../../components/Grid';
import SearchField from '../../components/SearchField';
import Spinner from '../../components/Spinner';
import usePokemons from '../../hooks/usePokemons';
import styles from './Home.module.css';

const Home = () => {
  const [pokemons, isFetching] = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ formattedName }) =>
    !search || formattedName.toLowerCase().includes(search.toLowerCase()));

  const onSearchChange = useCallback(e => setSearch(e.target.value), []);

  return (
    <div className={styles.home}>
      {isFetching ? (
        <Spinner className={styles.spinner} />
      ) : (
        <div>
          <SearchField onChange={onSearchChange} value={search} />
          <Grid pokemons={filteredPokemons} />
        </div>
      )}
    </div>
  );
}

export default Home;
