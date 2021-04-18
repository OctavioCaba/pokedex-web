import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonTableItem } from '../components/PokemonTableItem';
import { SearchPokemon } from '../components/SearchPokemon';

export const PokedexPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [scrollFlag, setScrollFlag] = useState(true);
  let pokemonLimit = 20;

  const fetchData = limit => pokemonData.getPokemons(limit).then(initialPokemons => setPokemon(initialPokemons));

  useEffect(() => {
    fetchData(20);
  }, []);

  useEffect(() => {
    if (!scrollFlag) {
      return;
    }
    
    const infiniteScroll = () => {
      if ((window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
        fetchData(pokemonLimit += 20);
      }
    }

    window.addEventListener('scroll', infiniteScroll, false);

    return () => window.removeEventListener('scroll', infiniteScroll, false);
  }, [scrollFlag]);

  return (
    <div className="col-lg-10 my-0 mx-auto">
      <h1>Pokédex</h1>
      <div className="table-container d-flex justify-content-between">
        <table className="table table-bordered pokemon-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sprite</th>
              <th scope="col">Pokémon</th>
              <th scope="col">Tipo/s</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {
              pokemon.map((pokemon, i) => {
                return (
                  <PokemonTableItem key={i} pokemon={pokemon} />
                )
              })
            }
          </tbody>
        </table>
        <SearchPokemon setPokemon={setPokemon} setScrollFlag={setScrollFlag} />
      </div>
    </div>
  )
}
