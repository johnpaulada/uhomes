import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator, View } from 'react-native';
import ListComponent from '../components/ListComponent';

class ListContainer extends React.Component {

  isLoading = () => this.props.allHouses.loading
  getListData = isLoading => {
    return {houses: (isLoading ? [] : this.props.allHouses.allHouses)};
  }

  render() {
    const isLoading = this.isLoading();

    return (
      <View>
        <ActivityIndicator animating={isLoading} size={'large'} />
        <ListComponent {...this.getListData(isLoading)} />
      </View>
    );
  }
}

const allHouses = gql`
{
  allHouses {
    id
    seller {
      fullName
    }
    price
    location {
      latitude
      longitude
      name
    }
    description
    image
  }
}`;

export default compose(
  graphql(allHouses, { name: 'allHouses' })
)(ListContainer);
