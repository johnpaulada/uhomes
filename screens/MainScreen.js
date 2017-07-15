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

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
})

export default MainScreen;
