const request = (path: string, options: RequestInit) => fetch(`https://pokeapi.co/api/v2/${path}`, options)
  .then(response => response.json());

export default request;
