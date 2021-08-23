import axios from 'axios';

const getPokemons = (limit = 12) => {
  const pokes = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  return pokes.then(res => res.data.results);
}

const getPokemonData = name => {
  const pokeData = axios.get(`https://pokeapi.co/api/v2/${name}`);
  return pokeData.then(res => res.data);
}

const getAllPokemon = () => {
  const allPokemon = axios.get('https://pokeapi.co/api/v2/pokemon?limit=898');
  return allPokemon.then(res => res.data.results);
}

/* const getMonoTypeDamageRelations = type => {
  const damageRelations = axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  return damageRelations.then(res => res.data.damage_relations);
}

const getDualTypeDamageRelations = (type1, type2) => {
  let firstDamageRelations, secondDamageRelations = {};
  const damagesSumatory = [];
  let damageRelations = {};
  const result1 = [];
  const result2 = [];
  const no_damage_from = [];

  axios.get(`https://pokeapi.co/api/v2/type/${type1}`).then(res => {
    firstDamageRelations = res.data.damage_relations;
  });

  axios.get(`https://pokeapi.co/api/v2/type/${type2}`).then(res => {
    secondDamageRelations = res.data.damage_relations;

    // GENERAL
    for (let firstCategory = 0; firstCategory < firstDamageRelations.length; firstCategory++) {
      for (let firstArrayTypes = 0; firstArrayTypes < firstDamageRelations[firstCategory].length; firstArrayTypes++) {
        for (let secondCategory = 0; secondCategory < secondDamageRelations.length; secondCategory++) {
          for (let secondArrayTypes = 0; secondArrayTypes < secondDamageRelations[secondCategory].length; secondArrayTypes++) {
            if(secondDamageRelations[secondCategory][secondArrayTypes] === firstDamageRelations[firstCategory][firstArrayTypes]) {
              console.log(secondDamageRelations[secondCategory][secondArrayTypes].name);
              continue;
            }
          }
        }
      }
    }

    // NO DAMAGE FROM
    if (secondDamageRelations['no_damage_from'].length >= 1) {
      for (let i = 0; i < secondDamageRelations['no_damage_from'].length; i++) {
        let type = secondDamageRelations['no_damage_from'][i].name;
        no_damage_from.push(type);
      }
    }

    // DOUBLE DAMAGE FROM----------------------------------
    for (let i = 0; i < firstDamageRelations['double_damage_from'].length; i++) {
      for (let j = 0; j < secondDamageRelations['double_damage_from'].length; j++) {
        if (secondDamageRelations['double_damage_from'].includes(firstDamageRelations['double_damage_from'][i].name)) {
          if (!result1.includes(firstDamageRelations['double_damage_from'][i].name)) {
            result1.push(firstDamageRelations['double_damage_from'][i].name);
            continue;
          }
          if (result2.includes(firstDamageRelations['double_damage_from'][i].name)) {
            for (let j = 0; j < result2.length; j++) {
              if (result2[j] === firstDamageRelations['double_damage_from'][i].name) {
                result2.splice(j, 1);
              }
            }
          }
        } else {
          if (!result2.includes(firstDamageRelations['double_damage_from'][i].name) && !result1.includes(firstDamageRelations['double_damage_from'][i].name)) {
            result2.push(firstDamageRelations['double_damage_from'][i].name);
          }
  
          if (!result2.includes(secondDamageRelations['double_damage_from'][j].name) && !result1.includes(secondDamageRelations['double_damage_from'][j].name)) {
            result2.push(secondDamageRelations['double_damage_from'][j].name);
          }
        }
      }
    }
  
    damageRelations = {
      no_damage_from: no_damage_from,
      cuadruple_damage_from: result1,
      double_damage_from: result2
    }
  
    console.log(damageRelations);
  });
  return damagesSumatory;
} */

const getAbilityData = ability => {
  const abilityResult = axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
  return abilityResult.then(res => res.data);
}

const getPokemonEvolutionChain = url => {
  let evolutionChain = [];
  let evolutionChainUrl;

  axios.get(url).then(res => {
    evolutionChainUrl =  res.data.evolution_chain.url;

    axios.get(evolutionChainUrl).then(results => {
      evolutionChain.push({name: results.data.chain.species.name});

      results.data.chain.evolves_to.forEach(evols => {
        evolutionChain.push({name: evols.species.name});

        evols.evolves_to.forEach(evolutions => evolutionChain.push({name: evolutions.species.name}));
      });

    });
  });

  return evolutionChain;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPokemons, getPokemonData, getAllPokemon, getAbilityData, getPokemonEvolutionChain };
