import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import helpers from '../helpers';

export const AbilityPage = () => {
  const [ability, setAbility] = useState([]);
  const [abilityName, setAbilityName] = useState([]);
  const [abilityGeneration, setAbilityGeneration] = useState([]);
  const [abilityDescription, setAbilityDescription] = useState([]);

  useEffect(() => {
    pokemonData.getAbilityData(window.location.pathname.substring(11)).then(ability => {
      setAbility(ability);
      setAbilityName(ability.names[5].name);
      const generationTranslated = helpers.generationsTranslation(ability.generation.name);
      setAbilityGeneration(generationTranslated);
      console.log(ability);
      ability.flavor_text_entries[21].language.name === 'es'
        ? setAbilityDescription(ability.flavor_text_entries[21].flavor_text)
        : setAbilityDescription(ability.effect_entries[1].effect);
    });
  }, []);

  return (
    <div>
      <h1>{abilityName}</h1>
      <div className="container-lg mt-4">
        <table className="table table-bordered pokemon-table">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Primera aparición</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{abilityDescription}</td>
              <td>{abilityGeneration}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered pokemon-table">
          <thead>
            <tr>
              <td>Lista de Pokémons que poseen "<strong>{abilityName}</strong>"</td>
            </tr>
          </thead>
          <tbody>
            {
              ability.pokemon.map(poke => {
                /* <tr>
                    <td>
                      <a href={`http://localhost:3000/pokemon/${ability.pokemon[0].pokemon.name}`}>{ability.pokemon !== undefined ? ability.pokemon[0].pokemon.name : ''}</a>
                    </td>
                  </tr> */
                  //CREAR COMPONENTE
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
