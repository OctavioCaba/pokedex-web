import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonCard } from '../components/PokemonCard';
let displayedPokemons = 12;

export const WelcomePage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    pokemonData.getPokemons().then(initialPokemons => setPokemon(initialPokemons));
  }, []);

  const handleClick = e => {
    e.preventDefault();
    pokemonData.getPokemons(displayedPokemons += 12).then(morePokemons => setPokemon(morePokemons));
  }

  return (
    <div className="container">
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
      <button onClick={handleClick} className="btn btn-more-pokemon shadow-none">Mostrar más</button>
    </div>
  )
}
