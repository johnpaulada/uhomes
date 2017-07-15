import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Main'
  };

  render() {
    return (
      <View>
        <Text>Main Screen</Text>
      </View>
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