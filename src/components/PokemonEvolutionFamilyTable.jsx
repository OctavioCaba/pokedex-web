import axios from 'axios';
import { useState, useEffect } from 'react';

export const PokemonEvolutionFamilyTable = ({ speciesLink }) => {
  const [evolutionChainURL, setEvolutionChainURL] = useState('');
  const [evolutionChain, setEvolutionChain] = useState([]);

  axios.get(speciesLink).then(specie => {
    setEvolutionChainURL(specie.data.evolution_chain.url);
  });

  useEffect(() => {
    let evoChain = [];
    if (evolutionChainURL !== '') {
      axios.get(evolutionChainURL).then(res => {
        let evoData = res.data.chain;

        console.log(evoData.evolves_to[0].evolution_details[0].min_level);

        do {
          let numberOfEvolutions = evoData['evolves_to'].length;  
        
          evoChain.push({
            "species_name": evoData.species.name,
            "min_level": !evoData.evolves_to[0] ? 'Forma final' : evoData.evolves_to[0].evolution_details[0].min_level,
            "trigger_name": !evoData.evolves_to[0] ? 'Forma final' : evoData.evolves_to[0].evolution_details[0].trigger.name,
            "item": !evoData.item ? null : evoData.item
          });
        
          if(numberOfEvolutions > 1) {
            for (let i = 1;i < numberOfEvolutions; i++) { 
              evoChain.push({
                "species_name": evoData.evolves_to[i].species.name,
                "min_level": !evoData.evolves_to[i] ? 'Forma final' : evoData.evolves_to[i].evolution_details[0].min_level,
                "trigger_name": !evoData.evolves_to[i].evolution_details[0].trigger ? 'Forma final' : evoData.evolves_to[i].evolution_details[0].trigger.name,
                "item": !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item
             });
            }
          }        
        
          evoData = evoData['evolves_to'][0];
        
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

        setEvolutionChain(evoChain);
      });
    }
  }, [evolutionChainURL]);

  return (
    <table className="table table-bordered pokemon-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Método evolutivo</th>
        </tr>
      </thead>
      <tbody>
        {
          evolutionChain.map((poke, i) => {
            return (
              <tr key={i}>
                <td key={i} className="text-capitalize">
                  <a className="pokemon-name-link" href={`/pokemon/${poke.species_name}`}>
                    {poke.species_name}
                  </a>
                </td>
                <td>{poke.trigger_name}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}
