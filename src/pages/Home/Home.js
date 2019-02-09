import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom'

import usePokemons from '../../hooks/usePokemons';
import styles from './Home.module.css';

const Home = () =>  {
  const [pokemons, isFetching] = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ formattedName }) =>
    !search || formattedName.toLowerCase().includes(search.toLowerCase()));

  const onSearchChange = useCallback(e => setSearch(e.target.value), []);

  return (
    <div className={styles.home}>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div>
          <input
            autoFocus
            className={styles.searchField}
            onChange={onSearchChange} type="text" value={search}
            placeholder="Search for Pokémon"
          />
          <div className={styles.grid}>
            {filteredPokemons.length === 0 ? 'No Pokémon found' : (
              filteredPokemons.map(({ formattedName, name, sprite }) => (
                <Link className={styles.cell} key={name} to={`/${name}`}>
                  <img className={styles.sprite} src={sprite} alt="" />
                  <span>{formattedName}</span>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
