import React from 'react';
import { View } from 'react-native';
import SellerDetailsContainer from '../containers/SellerDetailsContainer';

class SellerDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Seller Profile"
  };

  render() {
    const { id } = this.props.navigation.state.params;

    return (
      <SellerDetailsContainer id={id} />
    );
  }
}

export default SellerDetailsScreen;
