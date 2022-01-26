import React, { Component } from 'react';

class PokemonType extends Component {
  render () {
    const type = this.props.type;

    return (
      <p>{type}</p>
    )
  }
}

export default PokemonType;