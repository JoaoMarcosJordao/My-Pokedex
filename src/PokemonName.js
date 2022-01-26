import React, { Component } from 'react';

class PokemonName extends Component {
  render () {
    const name = this.props.name;

    return (
      <h4>{name}</h4>
    )
  }
}

export default PokemonName;