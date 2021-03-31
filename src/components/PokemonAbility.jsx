import { useEffect, useState } from 'react';
import pokemonData from '../data/pokemonData';

export const PokemonAbility = ({ ability }) => {
  const [abilityData, setAbilityData] = useState([]);

  useEffect(() => {
    pokemonData.getAbilityData(ability.ability.name).then(res => {
      setAbilityData(res);
    });
  }, [ability]);

  return (
    abilityData.names
    ? <tr>
        <th scope="row">
          {
            ability.is_hidden
            ? 'Habilidad oculta'
            : 'Habilidad'
          }
        </th>
        <td>{abilityData.names[5].name}</td>
        <td>{abilityData.effect_entries[1].short_effect}</td>
      </tr>
    : <tr>
        <td>one im not prouf of</td>
      </tr>
  )
}
