import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import SellerDetailsComponent from '../components/SellerDetailsComponent';

class SellerDetailsContainer extends React.Component {
  isLoading = () => this.props.SellerDetails.loading;
  getResult = isLoading => isLoading ? null : this.props.SellerDetails.Person;

  render() {
    const isLoading = this.isLoading();

    return (
      isLoading ? null : <SellerDetailsComponent {...this.getResult(isLoading)} />
    );
  }
}

const sellerDetails = gql`
query SellerDetails($id: ID!) {
  Person(id: $id) {
    avatar
    fullName
    isVerified
    houses {
      id
      image
      location {
        name
      }
      price
      description
    }
  }
}`;

export default compose(
  graphql(sellerDetails, {
    name: 'SellerDetails',
    options: ({id}) => ({variables: {id}})
  })
)(SellerDetailsContainer);
