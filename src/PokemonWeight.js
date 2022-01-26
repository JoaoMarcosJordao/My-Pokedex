import React, { Component } from 'react';

class PokemonWeight extends Component {
  render () {
    const weight = Object.values(this.props);
    const value = weight[0].value;
    const measure = weight[0].measurementUnit;

    return (
      <p>{`${value}${measure}`}</p>
    )
  }
}

export default PokemonWeight;