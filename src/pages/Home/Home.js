import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import usePokemons from '../../hooks/usePokemons';
import capitalize from '../../utils/capitalize';
import styles from './Home.module.css';

const Home = () =>  {
  const [pokemons, isFetching] = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ name }) =>
    !search || name.startsWith(search.toLowerCase()));

  return (
    <div className={styles.home}>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div>
          <input onChange={(e => setSearch(e.target.value))} type="text" value={search} />
          <div className={styles.grid}>
            {filteredPokemons.length === 0 ? 'No Pokémon found' : (
              filteredPokemons.map(({ name, sprite }) => (
                <div className={styles.cell} key={name}>
                  <img className={styles.sprite} src={sprite} alt="" />
                  <Link to={`/${name}`}>{capitalize(name)}</Link>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
