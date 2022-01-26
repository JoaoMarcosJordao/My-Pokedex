import React, { Component } from "react";
import data from './data';
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import PokemonWeight from './PokemonWeight';
import PokemonImage from './PokemonImage';


class Pokemon extends Component {
  render() {
    return (
      data.map((pokemon) => (
        <article key={pokemon.id}>
          <PokemonName name={pokemon.name}/>
          <div>
          <PokemonImage source={pokemon.image}/>
          </div>
          <PokemonType type={pokemon.type}/>
          <PokemonWeight weight={pokemon.averageWeight}/>
        </article>
      ))
    )
  }
}

export default Pokemon;