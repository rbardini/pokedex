import React from 'react';

import Stats from '../../components/Stats';
import getEnglishEntry from '../../utils/getEnglishEntry';
import styles from './Header.module.css';

const Header = ({ pokemon }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      {pokemon.formattedName}
    </h1>
    <h2>{getEnglishEntry(pokemon.species.genera).genus}</h2>
    <p>{getEnglishEntry(pokemon.species.flavor_text_entries).flavor_text}</p>
    <Stats pokemon={pokemon} />
  </header>
);

export default Header;
