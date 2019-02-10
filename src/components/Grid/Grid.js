import React from 'react';

import Cell from '../Cell';
import styles from './Grid.module.css';

const Grid = ({ pokemons }) => (
  <div className={styles.grid}>
    {pokemons.length > 0
      ? pokemons.map(pokemon => <Cell key={pokemon.name} pokemon={pokemon} />)
      : 'No Pokémon found'
    }
  </div>
);

export default Grid;
