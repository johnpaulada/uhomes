import React from 'react';
import SearchContainer from './SearchContainer';

class SearchParameterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxPrice: 1000000
    }
  }

  setMaxPrice = maxPrice => this.setState({maxPrice})

  render() {
    return (
      <SearchContainer dispatch={this.props.dispatch} maxPrice={this.state.maxPrice} setMaxPrice={this.setMaxPrice} />
    )
  }
}

export default SearchParameterContainer;
