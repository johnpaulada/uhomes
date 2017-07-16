import React from 'react';
import { View } from 'react-native';
import HouseDetails from '../components/HouseDetails';

class HouseDetailsScreen extends React.Component {
  render() {
    const params = this.props.navigation.state.params;

    return (
      // <View></View>
      <HouseDetails {...params} />
    );
  }
}

export default HouseDetailsScreen;
