import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import capitalize from '../../utils/capitalize';
import getSpriteUrl from '../../utils/getSpriteUrl';
import request from '../../utils/request';
import styles from './Home.module.css';

const Home = () =>  {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchPokemons = async () => {
    const { results } = await request('pokemon/?limit=151');
    const pokemons = results.map((pokemon, i) => ({
      ...pokemon,
      // Workaround to fetch sprite URLs without making one request per Pokémon
      sprite: getSpriteUrl(i + 1),
    }));

    setPokemons(pokemons);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={styles.home}>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className={styles.grid}>
          <input onChange={(e => setSearch(e.target.value))} type="text" value={search} />
          {pokemons
            .filter(({ name }) => !search || name.startsWith(search.toLowerCase()))
            .map(({ name, sprite }) => (
              <div className={styles.cell} key={name}>
                <img src={sprite} alt="" />
                <Link to={`/${name}`}>{capitalize(name)}</Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
