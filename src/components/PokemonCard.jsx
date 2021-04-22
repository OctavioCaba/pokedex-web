import pokemonData from '../data/pokemonData';
import { useState, useEffect } from 'react';
import helpers from '../helpers';
import { PokemonImage } from './PokemonImage';
import { TypesFormatter } from './TypesFormatter';

export const PokemonCard = ({ pokemon }) => {
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    if (pokemon.name === 'nosepass') {
      pokemonData.getPokemonData('pokemon-form/299/').then(res => {
        const typesTranslated = res.types.map(type => helpers.typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else if (pokemon.name === 'shedinja') {
      pokemonData.getPokemonData('pokemon-form/292/').then(res => {
        const typesTranslated = res.types.map(type => helpers.typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else if (pokemon.name === 'suicune') {
      pokemonData.getPokemonData('pokemon-form/245/').then(res => {
        const typesTranslated = res.types.map(type => helpers.typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
      });
    } else {
      pokemonData.getPokemonData('pokemon/' + pokemon.name).then(res => {
        const typesTranslated = res.types.map(type => helpers.typesTranslation(type.type.name));
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
              <TypesFormatter pokemonType={pokemonType} />
            }
          </p>
        </div>
      </div>
    </div>
  )
}
