import React, { useState, useEffect } from 'react';

const Details = ({ match }) => {
  const { name } = match.params;
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();

    setPokemon(pokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <ul>
            <li>Name: {pokemon.name}</li>
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
