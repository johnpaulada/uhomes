import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SearchScreen from '../screens/SearchScreen';

const SearchNavigator = StackNavigator({
  Search: {
    screen: SearchScreen
  }
}, {
  headerMode: 'none',
});

SearchNavigator.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='search'
      type='font-awesome'
      color={tintColor}
    />
  )
};

export default SearchNavigator;
