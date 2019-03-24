import React, { FC } from 'react';

import Stats from '../../components/Stats';
import { PokemonItem } from '../../hooks/usePokemon';
import getEnglishEntry from '../../utils/getEnglishEntry';
import styles from './Header.module.css';

type Props = {
  className: string;
  pokemon: PokemonItem;
};

const Header: FC<Props> = ({ className, pokemon }) => (
  <header className={className}>
    <h1 className={styles.title}>
      {pokemon.formattedName}
    </h1>
    <h2>{getEnglishEntry(pokemon.species.genera).genus}</h2>
    <p>{getEnglishEntry(pokemon.species.flavor_text_entries).flavor_text}</p>
    <Stats pokemon={pokemon} />
  </header>
);

export default Header;
