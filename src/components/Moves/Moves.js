import React from 'react';

import Tag from '../../components/Tag';

const Moves = ({ pokemon }) => (
  <section>
    <h2>Moves</h2>
    {pokemon.moves.map(({ move }) => <Tag key={move.name}>{move.name}</Tag>)}
  </section>
);

export default Moves;
