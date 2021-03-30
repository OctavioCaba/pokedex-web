import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonImage } from '../components/PokemonImage';
import typesTranslation from '../helpers';
import { BaseStatsChart } from '../components/BaseStatsChart';

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    pokemonData.getPokemonData(window.location.pathname.substring(1)).then(pokemon => {
      setPokemon(pokemon);
      const typesTranslated = pokemon.types.map(type => typesTranslation(type.type.name));
      setPokemonType(typesTranslated);
      console.log(pokemon.stats);
    });
  }, []);

  return (
    <div className="container-lg mt-3">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <PokemonImage
            pokemonImg={ 
              pokemon.sprites
              ? pokemon.sprites.other['official-artwork'].front_default
              : ''
            }
            imgSize='180px'
            className="text-left"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <h2 className="text-capitalize">{pokemon.name}</h2>
          <div className="pokemon-types mt-4">
            {
              pokemonType[0]
              ? <a href={`http://localhost:3000/tipo/${pokemonType[0]}`}><span className={`type ${pokemonType[0]}`}>{pokemonType[0]}</span></a>
              : ''
            }
            {
              pokemonType[1]
              ? <a href={`http://localhost:3000/tipo/${pokemonType[1]}`}><span className={`type ${pokemonType[1]}`}>{pokemonType[1]}</span></a>
              : ''
            }
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mt-md-0 mt-5">
          <h5>Estadísticas base</h5>
          <div>
            <BaseStatsChart stats={pokemon.stats} />
          </div>
        </div>
      </div>
    </div>
  )
}
