const request = path => fetch(`https://pokeapi.co/api/v2/${path}`)
  .then(response => response.json());

export default request;
