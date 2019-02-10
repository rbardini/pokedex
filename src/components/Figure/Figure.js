import React from 'react';

import Tag from '../../components/Tag';
import getTypeColor from '../../utils/getTypeColor';
import styles from './Figure.module.css';

const Figure = ({ pokemon }) => (
  <figure className={styles.figure}>
    <img className={styles.sprite} src={pokemon.sprites.front_default} alt="" />
    <figcaption>
      {pokemon.types.map(({ type }) => (
        <Tag key={type.name} style={{ backgroundColor: getTypeColor(type.name), color: '#fff' }}>{type.name}</Tag>
      ))}
    </figcaption>
  </figure>
);

export default Figure;
