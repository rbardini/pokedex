import { PokemonItem } from '../../types/pokemon'
import Tag from '../tag'

type Props = {
  pokemon: PokemonItem
}

const Moves = ({ pokemon }: Props) => (
  <section>
    <h2>Moves</h2>
    {pokemon.moves.map(({ move }) => (
      <Tag key={move.name}>{move.name}</Tag>
    ))}
  </section>
)

export default Moves
