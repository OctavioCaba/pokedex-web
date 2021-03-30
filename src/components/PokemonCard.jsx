import pokemonData from '../data/pokemonData';
import { useState, useEffect } from 'react';
import typesTranslation from '../helpers';
import { PokemonImage } from './PokemonImage';

export const PokemonCard = ({ pokemon }) => {
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    if (pokemon.name === 'nosepass') {
      pokemonData.getPokemonData('pokemon-form/299/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else if (pokemon.name === 'shedinja') {
      pokemonData.getPokemonData('pokemon-form/292/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else if (pokemon.name === 'suicune') {
      pokemonData.getPokemonData('pokemon-form/245/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else {
      pokemonData.getPokemonData('pokemon/' + pokemon.name).then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.other['official-artwork'].front_default);
      });
    }
  }, [pokemon.name]);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pokemon-card">
      <div className="card">
        <div className="card-body">
          <a href={`http://localhost:3000/pokemon/${pokemon.name}`}>
            <PokemonImage pokemonImg={pokemonImg} imgSize='90px' />
          </a>
          <a href={`http://localhost:3000/pokemon/${pokemon.name}`}><h5 className="card-title">{pokemon.name}</h5></a>
          <p className="card-text pokemon-types">
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
          </p>
        </div>
      </div>
    </div>
  )
}
