import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import styles from './Home.module.css';

const Home = () =>  {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { results } = await response.json();
    const pokemons = results.map((result, i) => ({
      ...result,
      // Workaround as there is no way to fetch sprite URLs without making one request per Pokémon :(
      sprite: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
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
                <img src={sprite} alt={name} />
                <Link to={`/${name}`}>{name}</Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
