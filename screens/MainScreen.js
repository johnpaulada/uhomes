import React from 'react';
import { StyleSheet } from 'react-native';
import MainContainer from '../containers/MainContainer';

class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Main'
  };

  render() {
    return (
      <MainContainer />
    );
  }
}

export default MainScreen;
