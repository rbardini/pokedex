import React, { FC } from 'react';
import classNames from 'classnames';

import Tag from '../../components/Tag';
import { PokemonItem } from '../../hooks/usePokemon';
import getTypeColor from '../../utils/getTypeColor';
import styles from './Figure.module.css';

type Props = {
  className: string;
  pokemon: PokemonItem;
};

const Figure: FC<Props> = ({ className, pokemon }) => (
  <figure className={classNames(styles.figure, className)}>
    <img className={styles.sprite} src={pokemon.sprites.front_default} alt="" />
    <figcaption>
      {pokemon.types.map(({ type }) => (
        <Tag
          key={type.name}
          style={{ backgroundColor: getTypeColor(type.name), color: '#fff' }}
        >
          {type.name}
        </Tag>
      ))}
    </figcaption>
  </figure>
);

export default Figure;
