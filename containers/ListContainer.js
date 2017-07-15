import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ListComponent from '../components/ListComponent';

class ListContainer extends React.Component {

  getListData = () => {
    const isLoading = this.props.allHouses.loading;
    return {houses: (isLoading ? [] : this.props.allHouses.allHouses)};
  }

  render() {
    return (
      <ListComponent {...this.getListData()} />
    );
  }
}

const allHouses = gql`
{
  allHouses {
    id
    seller{
      fullName
    }
    price
    location{
      latitude
      longitude
      name
    }
    description
    image
    sellingPrice
  }
}`;

export default compose(
  graphql(allHouses, { name: 'allHouses' })
)(ListContainer);
