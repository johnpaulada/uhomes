import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { NavigationActions } from 'react-navigation';
import SearchComponent from '../components/SearchComponent';

class SearchContainer extends React.Component {
  isLoading = () => this.props.SearchQuery.loading;
  getResults = isLoading => isLoading ? [] : this.props.SearchQuery.allHouses;

  render() {
    const isLoading = this.isLoading();

    return (
      <SearchComponent {...this.props} isLoading={isLoading} results={this.getResults(isLoading)} />
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
      name
    }
    price
    seller {
      id
      fullName
    }
  }
}`;

export default compose(
  graphql(searchQuery, { name: 'SearchQuery', options: ({maxPrice}) => {
    return {variables: { maxPrice }}
  } })
)(SearchContainer);
