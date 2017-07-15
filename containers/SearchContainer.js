import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SearchComponent from '../components/SearchComponent';

class SearchContainer extends React.Component {
  isLoading = () => this.props.SearchQuery.loading;
  getResults = isLoading => isLoading ? [] : this.props.SearchQuery.allHouses;

  render() {
    const isLoading = this.isLoading();

    return (
      <SearchComponent isLoading={isLoading} results={this.getResults(isLoading)} maxPrice={this.props.maxPrice} setMaxPrice={this.props.setMaxPrice} />
    );
  }
}

const searchQuery = gql`
query HouseSearch($maxPrice: Float) {
  allHouses(filter: {
    price_lt: $maxPrice
  }) {
    id
    image
    type
    description
    location {
      latitude
      longitude
      name
    }
    price
    seller {
      fullName
    }
  }
}`;

export default compose(
  graphql(searchQuery, { name: 'SearchQuery', options: ({maxPrice}) => {
    return {variables: { maxPrice }}
  } })
)(SearchContainer);
