import { useState } from 'react';
import pokemonData from '../data/pokemonData';

export const SearchPokemon = ({ setPokemon, setScrollFlag }) => {
  const [findPokemon, setFindPokemon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (findPokemon === '') {
      pokemonData.getPokemons(20).then(initialPokemons => setPokemon(initialPokemons));
      setScrollFlag(true);
    } else {
      pokemonData.getAllPokemon().then(pokemons => setPokemon(pokemons.filter(pkmn => pkmn.name.toLowerCase().includes(findPokemon.toLowerCase()))));
      setScrollFlag(false);
    }
  }

  const handleChange = e => {
    setFindPokemon(e.target.value);
  }

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pokemon-search">BUSCADOR</label>
          <input type="search" className="form-control shadow-none" value={findPokemon} onChange={handleChange} id="pokemon-search" placeholder="Buscar por nombre"/>
        </div>
        <input type="submit" className="btn btn-search-pokemon shadow-none" value="BUSCAR"/>
      </form>
    </div>
  )
}
