import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import usePokemons from '../../hooks/usePokemons';
import capitalize from '../../utils/capitalize';
import styles from './Home.module.css';

const Home = () =>  {
  const [pokemons, isFetching] = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ name }) =>
    !search || name.includes(search.toLowerCase()));

  return (
    <div className={styles.home}>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div>
          <input
            autoFocus
            className={styles.searchField}
            onChange={(e => setSearch(e.target.value))} type="text" value={search}
            placeholder="Search for Pokémon"
          />
          <div className={styles.grid}>
            {filteredPokemons.length === 0 ? 'No Pokémon found' : (
              filteredPokemons.map(({ name, sprite }) => (
                <Link className={styles.cell} key={name} to={`/${name}`}>
                  <img className={styles.sprite} src={sprite} alt="" />
                  <span>{capitalize(name)}</span>
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
