import axios from 'axios';

const getPokemons = (limit = 12) => {
  const pokes = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  return pokes.then(res => res.data.results);
}

const get200Pokemons = (link = 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0') => {
  const pokes = axios.get(link);
  return pokes.then(res => res.data);
}

const getPokemonData = name => {
  const pokeData = axios.get(`https://pokeapi.co/api/v2/${name}`);
  return pokeData.then(res => res.data);
}

const getAllPokemon = () => {
  const allPokemon = axios.get('https://pokeapi.co/api/v2/pokemon?limit=898');
  return allPokemon.then(res => res.data.results);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPokemons, getPokemonData, getAllPokemon, get200Pokemons };
