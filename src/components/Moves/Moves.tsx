import React, { FC } from 'react';

import Tag from '../../components/Tag';
import { PokemonItem } from '../../hooks/usePokemon';

type Props = {
  pokemon: PokemonItem;
};

const Moves: FC<Props> = ({ pokemon }) => (
  <section>
    <h2>Moves</h2>
    {pokemon.moves.map(({ move }) => (
      <Tag key={move.name}>{move.name}</Tag>
    ))}
  </section>
);

export default Moves;
