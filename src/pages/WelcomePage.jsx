import axios from 'axios';
import { useState } from 'react';

const getPokemon = async () => {
  const pokes = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1');
  console.log(pokes.data.results[0]);
  return pokes.data.results[0];
}

export const WelcomePage = () => {
  const [pokemon, setPokemon] = useState({name: 'octi'});

  return (
    <>
      <h1>Pokédex WebApp</h1>
      <section className="pokemon-cards row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              <p className="card-text">Steel/Ground</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Excadrill</h5>
              <p className="card-text">Steel/Ground</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <p>sfgjohsfgkl</p>
              <h5 className="card-title">Excadrill</h5>
              <p className="card-text">Steel/Ground</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Excadrill</h5>
              <p className="card-text">Steel/Ground</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
