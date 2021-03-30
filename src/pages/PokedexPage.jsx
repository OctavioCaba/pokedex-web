import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonTableItem } from '../components/PokemonTableItem';
import { SearchPokemon } from '../components/SearchPokemon';
import { PokedexPagination } from '../components/PokedexPagination';

export const PokedexPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [fetchResult, setFetchResult] = useState([]);

  useEffect(() => {
    pokemonData.get200Pokemons().then(initialPokemons => {
      setPokemon(initialPokemons.results);
      setFetchResult(initialPokemons);
    });
  }, []);

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
        <SearchPokemon setPokemon={setPokemon} />
      </div>
      {
        pokemon.length >= 1
        ? <PokedexPagination fetchResult={fetchResult} setFetchResult={setFetchResult} setPokemon={setPokemon} />
        : null
      }
    </div>
  )
}
