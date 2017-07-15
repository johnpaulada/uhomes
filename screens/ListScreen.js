import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

class ListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'List',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='list'
        type='font-awesome'
        color={tintColor}
      />
    )
  };

  render() {
    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
})

export default ListScreen;
