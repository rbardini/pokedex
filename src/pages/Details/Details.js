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
        <span>{JSON.stringify(pokemon)}</span>
      )}
    </div>
  );
}

export default Details;
