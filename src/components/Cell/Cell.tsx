import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom'

import { PokemonListItem } from '../../hooks/usePokemons';
import styles from './Cell.module.css';

type Props = {
  pokemon: PokemonListItem;
};

const Cell: FC<Props> = ({ pokemon }) => (
  <Link className={styles.cell} to={`/${pokemon.name}`}>
    <img className={styles.sprite} src={pokemon.sprite} alt="" />
    <span>{pokemon.formattedName}</span>
  </Link>
);

export default memo(Cell);
