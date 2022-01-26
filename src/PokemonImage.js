import React, { Component } from 'react';

class PokemonImage extends Component {
  render () {
    const img = this.props.source;

    return <img src={img} alt={this.props.moreInfo}/>;
  }
}

export default PokemonImage;