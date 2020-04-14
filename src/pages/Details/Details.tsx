import React, { FC, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';

import Figure from '../../components/Figure';
import Header from '../../components/Header';
import Moves from '../../components/Moves';
import Profile from '../../components/Profile';
import Spinner from '../../components/Spinner';
import usePokemon from '../../hooks/usePokemon';
import styles from './Details.module.css';

type Params = {
  name: string;
};

const Details: FC<RouteComponentProps<Params>> = ({ match }) => {
  const { pokemon, isFetching, error } = usePokemon(match.params.name);

  return (
    <Fragment>
      <Link className={styles.back} to="/">
        ←
      </Link>
      {isFetching && <Spinner />}
      {error && <p className={styles.error}>This Pokémon has fled!</p>}
      {pokemon && (
        <div className={styles.grid}>
          <Helmet>
            <title>{pokemon.formattedName}</title>
          </Helmet>
          <span className={styles.number}>#{pokemon.id}</span>
          <Header className={styles.header} pokemon={pokemon} />
          <Figure className={styles.figure} pokemon={pokemon} />
          <div className={styles.content}>
            <Profile pokemon={pokemon} />
            <Moves pokemon={pokemon} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Details;
