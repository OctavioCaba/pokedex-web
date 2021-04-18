import pokemonData from '../data/pokemonData';
import { useState, useEffect } from 'react';
import typesTranslation from '../helpers';
import { PokemonImage } from './PokemonImage';
import { TypesFormatter } from './TypesFormatter';

export const PokemonTableItem = ({ pokemon }) => {
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);
  const [pokemonDexId, setPokemonDexId] = useState([]);

  useEffect(() => {
    if (pokemon.name === 'nosepass') {
      pokemonData.getPokemonData('pokemon-form/299/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
        setPokemonDexId(res.id);
      });
    } else if (pokemon.name === 'shedinja') {
      pokemonData.getPokemonData('pokemon-form/292/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
        setPokemonDexId(res.id);
      });
    } else if (pokemon.name === 'suicune') {
      pokemonData.getPokemonData('pokemon-form/245/').then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
        setPokemonDexId(res.id);
      });
    } else {
      pokemonData.getPokemonData('pokemon/' + pokemon.name).then(res => {
        const typesTranslated = res.types.map(type => typesTranslation(type.type.name));
        setPokemonType(typesTranslated);
        setPokemonImg(res.sprites.front_default);
        setPokemonDexId(res.id);
      });
    }
  }, [pokemon.name]);

  return (
    <>
      <tr>
        <th scope="row">{pokemonDexId}</th>
        <td>
          <PokemonImage pokemonImg={pokemonImg} imgSize='75px' />
        </td>
        <td className="text-capitalize">
          <a href={`http://localhost:3000/pokemon/${pokemon.name}`}className="pokemon-name-link">
            {
              pokemon.name !== 'urshifu-single-strike'
              ? pokemon.name
              : 'urshifu'
            }
          </a>
        </td>
        <td className="pokemon-types">
          {
            <TypesFormatter pokemonType={pokemonType} />
          }
        </td>
      </tr>
    </>
  )
}
