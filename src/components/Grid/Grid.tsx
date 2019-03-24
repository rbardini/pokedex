import React, { FC } from 'react';

import { PokemonListItem } from '../../hooks/usePokemons';
import Cell from '../Cell';
import styles from './Grid.module.css';

type Props = {
  pokemons: PokemonListItem[];
};

const Grid: FC<Props> = ({ pokemons }) => (
  <div className={styles.grid}>
    {pokemons.length > 0
      ? pokemons.map(pokemon => <Cell key={pokemon.name} pokemon={pokemon} />)
      : 'No Pokémon found'
    }
  </div>
);

export default Grid;
