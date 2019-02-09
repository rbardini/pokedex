import React from 'react';
import styles from './Home.module.css';

const Home = ({ pokemons }) => (
  <div className={styles.home}>
    <div className={styles.grid}>
      {pokemons.map(({ name, sprite }) => (
        <div className={styles.cell} key={name}>
          <img src={sprite} alt={name} />
          {name}
        </div>
      ))}
    </div>
  </div>
);

export default Home;
