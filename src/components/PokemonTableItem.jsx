import pokemonData from '../data/pokemonData';
import { useState, useEffect } from 'react';
import typesTranslation from '../helpers';

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
        <td className="pokemon-sprite">
          <img src={pokemonImg} alt="pokemon-sprite"/>
        </td>
        <td style={{textTransform:'capitalize'}}>
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
            pokemonType[0]
            ? <a href={`http://localhost:3000/tipo/${pokemonType[0]}`}><span className={`type ${pokemonType[0]}`}>{pokemonType[0]}</span></a>
            : ''
          }
          {
            pokemonType[1]
            ? <a href={`http://localhost:3000/tipo/${pokemonType[1]}`}><span className={`type ${pokemonType[1]}`}>{pokemonType[1]}</span></a>
            : ''
          }
        </td>
      </tr>
    </>
  )
}
