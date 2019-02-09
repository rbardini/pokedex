import React from 'react';
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
            {name}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Home;
