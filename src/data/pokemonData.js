import axios from 'axios';

const getPokemons = () => {
  const pokes = axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
  return pokes.then(response => response.data.results);
}

const getPokemonData = name => {
  const pokeData = axios.get(`https://pokeapi.co/api/v2/${name}`);
  return pokeData.then(res => res.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPokemons, getPokemonData };
