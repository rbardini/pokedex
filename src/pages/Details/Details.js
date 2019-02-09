import React from 'react';
import { Link } from 'react-router-dom'

import usePokemon from '../../hooks/usePokemon';
import capitalize from '../../utils/capitalize';
import styles from './Details.module.css';

const Details = ({ match }) => {
  const [pokemon, isFetching] = usePokemon(match.params.name);

  return (
    <div>
      <Link to="/">Back</Link>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <div>
          <img className={styles.sprite} src={pokemon.sprites.front_default} alt="" />
          <ul>
            <li>Name: {capitalize(pokemon.name)}</li>
            <li>Height: {pokemon.height / 10} m</li>
            <li>Weight: {pokemon.weight / 10} kg</li>
            <li>
              Abilities:
              <ul>
                {pokemon.abilities.map(({ ability }) => <li key={ability.name}>{ability.name}</li>)}
              </ul>
            </li>
            <li>Base experience: {pokemon.base_experience}</li>
            <li>
              Types:
              <ul>
                {pokemon.types.map(({ type }) => <li key={type.name}>{type.name}</li>)}
              </ul>
            </li>
            <li>
              Stats:
              <ul>
                {pokemon.stats.map(({ base_stat, stat }) => <li key={stat.name}>{stat.name} {base_stat}</li>)}
              </ul>
            </li>
            <li>
              Moves:
              <ul>
                {pokemon.moves.map(({ move }) => <li key={move.name}>{move.name}</li>)}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Details;
