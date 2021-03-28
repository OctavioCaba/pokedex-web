import { useState } from 'react';
import pokemonData from '../data/pokemonData';

export const PokedexPagination = ({ setPokemon, fetchResult, setFetchResult }) => {
  const [nextButton, setNextButton] = useState('');

  const previous200 = e => {
    e.preventDefault();
    fetchResult.previous === 'https://pokeapi.co/api/v2/pokemon?offset=702&limit=98'
    ? pokemonData.get200Pokemons('https://pokeapi.co/api/v2/pokemon?offset=600&limit=200').then(res => {
      setPokemon(res.results);
      setFetchResult(res);
      setNextButton('');
    })
    : pokemonData.get200Pokemons(fetchResult.previous).then(res => {
      setPokemon(res.results);
      setFetchResult(res);
    })
  }

  const next200 = e => {
    e.preventDefault();
    fetchResult.next === 'https://pokeapi.co/api/v2/pokemon?offset=800&limit=200'
    ? pokemonData.get200Pokemons('https://pokeapi.co/api/v2/pokemon?offset=800&limit=98').then(res => {
        setPokemon(res.results);
        setFetchResult(res);
        setNextButton('disabled');
      })
    : pokemonData.get200Pokemons(fetchResult.next).then(res => {
        setPokemon(res.results);
        setFetchResult(res);
      });
  }

  return (
    <section className="container pokemon-pagination d-flex justify-content-between mb-4">
      <button className={`btn btn-secondary shadow-none ${fetchResult.previous === null ? 'disabled' : ''}`} onClick={previous200}>Anteriores 200</button>
      <button className={`btn btn-secondary shadow-none ${fetchResult.next === null ? 'disabled' : ''} ${nextButton}`} onClick={next200}>Próximos 200</button>
    </section>
  )
}
