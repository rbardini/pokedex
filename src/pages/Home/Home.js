import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Home.module.css';

const Home = ({ isLoading, pokemons }) => (
  <div className={styles.home}>
    {isLoading ? (
      <span>Loading...</span>
    ) : (
      <div className={styles.grid}>
        {pokemons.map(({ name, sprite }) => (
          <div className={styles.cell} key={name}>
            <img src={sprite} alt={name} />
            <Link to={`/${name}`}>{name}</Link>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Home;
