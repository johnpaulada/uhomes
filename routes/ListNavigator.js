import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ListScreen from '../screens/ListScreen';

const ListNavigator = StackNavigator({
  List: {
    screen: ListScreen
  }
}, {
  headerMode: 'none',
});

ListNavigator.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='list'
      type='font-awesome'
      color={tintColor}
    />
  )
};

export default ListNavigator;
