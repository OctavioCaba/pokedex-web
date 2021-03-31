import { useState, useEffect } from 'react';
import pokemonData from '../data/pokemonData';
import { PokemonImage } from '../components/PokemonImage';
import typesTranslation from '../helpers';
import { BaseStatsChart } from '../components/BaseStatsChart';
import { PokemonAbility } from '../components/PokemonAbility';

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  useEffect(() => {
    pokemonData.getPokemonData(window.location.pathname.substring(1)).then(pokemon => {
      setPokemon(pokemon);
      const typesTranslated = pokemon.types.map(type => typesTranslation(type.type.name));
      setPokemonType(typesTranslated);
      console.log(pokemon.abilities);
      setPokemonAbilities(pokemon.abilities);
      /* if (pokemonType.length === 2) {
        console.log('dualtype');
        //console.log(pokemonData.getDualTypeDamageRelations(pokemon.types[0].type.name, pokemon.types[1].type.name));
        pokemonData.getDualTypeDamageRelations(pokemon.types[0].type.name, pokemon.types[1].type.name);
      } else if (pokemonType.length === 1) {
        console.log('monotype');
        pokemonData.getMonoTypeDamageRelations(pokemon.types[0].type.name).then(res => console.log(res));
      } */
    })
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
              ? <a href={'http://localhost:3000/tipos'}><span className={`type ${pokemonType[0]}`}>{pokemonType[0]}</span></a>
              : ''
            }
            {
              pokemonType[1]
              ? <a href={'http://localhost:3000/tipos'}><span className={`type ${pokemonType[1]}`}>{pokemonType[1]}</span></a>
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
      </div> {/* GRID */}
      <div className="jumbotron mt-4">
        <h4>Habilidades</h4>
        <table className="table table-bordered pokemon-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción <small className="text-muted">(inglés)</small></th>
            </tr>
          </thead>
          <tbody>
            {
              pokemonAbilities[0]
              ? pokemonAbilities.map((ability, i) => <PokemonAbility key={i} ability={ability} />)
              : null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
