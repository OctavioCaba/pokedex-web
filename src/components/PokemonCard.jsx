import pokemonData from '../data/pokemonData';
import { useState, useEffect } from 'react';

export const PokemonCard = ({ pokemon }) => {
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    if (pokemon.name === 'nosepass') {
      pokemonData.getPokemonData('pokemon-form/299/').then(res => {
        setPokemonType(res.types);
        setPokemonImg(res.sprites.front_default);
      });
    } else if (pokemon.name === 'shedinja') {
      pokemonData.getPokemonData('pokemon-form/292/').then(res => {
        setPokemonType(res.types);
        setPokemonImg(res.sprites.front_default);
      });
    } else {
      pokemonData.getPokemonData('pokemon/' + pokemon.name).then(res => {
        setPokemonType(res.types);
        setPokemonImg(res.sprites.other['official-artwork'].front_default);
      });
    }
  }, [pokemon.name]);

  return (
    <div className="col-sm-3 pokemon-card">
      <div className="card">
        <div className="card-body">
          <a href={`http://localhost:3000/pokemon/${pokemon.name}`}>
            <div className="image-container">
              <img src={pokemonImg} alt="pokemon"/>
            </div>
          </a>
          <a href={`http://localhost:3000/pokemon/${pokemon.name}`}><h5 className="card-title">{pokemon.name}</h5></a>
          <p className="card-text">
            {
              pokemonType[0]
              ? <a href={`http://localhost:3000/tipo/${pokemonType[0].type.name}`}><span className={`type ${pokemonType[0].type.name}`}>{pokemonType[0].type.name}</span></a>
              : ''
            }
            {
              pokemonType[1]
              ? <a href={`http://localhost:3000/tipo/${pokemonType[1].type.name}`}><span className={`type ${pokemonType[1].type.name}`}>{pokemonType[1].type.name}</span></a>
              : ''
            }
          </p>
        </div>
      </div>
    </div>
  )
}
