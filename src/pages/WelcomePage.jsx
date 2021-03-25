import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonCard } from '../components/PokemonCard';

export const WelcomePage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    pokemonData.getPokemons().then(initialPokemons => setPokemon(initialPokemons));
  }, []);

  return (
    <>
      <h1>Pokédex WebApp</h1>
      <section className="pokemon-cards row">
        {
          pokemon.map((pokemon, i) => {
            return (
              <PokemonCard key={i} pokemon={pokemon} />
            )
          })
        }
      </section>
    </>
  )
}
