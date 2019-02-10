import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

import Figure from '../../components/Figure';
import Header from '../../components/Header';
import Moves from '../../components/Moves';
import Profile from '../../components/Profile';
import Spinner from '../../components/Spinner';
import usePokemon from '../../hooks/usePokemon';
import styles from './Details.module.css';

const Details = ({ match }) => {
  const { pokemon, isFetching } = usePokemon(match.params.name);

  return (
    <Fragment>
      <Link className={styles.back} to="/">←</Link>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className={styles.grid}>
          <span className={styles.number}>#{pokemon.id}</span>
          <Header pokemon={pokemon} />
          <Figure pokemon={pokemon} />
          <div className={styles.content}>
            <Profile pokemon={pokemon} />
            <Moves pokemon={pokemon} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Details;
