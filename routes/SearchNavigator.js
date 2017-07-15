import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SearchScreen from '../screens/SearchScreen';
import HouseDetailsScreen from '../screens/HouseDetailsScreen';
import LoanCalculatorScreen from '../screens/LoanCalculatorScreen';
import SellerDetailsScreen from '../screens/SellerDetailsScreen';

const SearchNavigator = StackNavigator({
  Search: {
    screen: SearchScreen
  },
  HouseDetails: {
    screen: HouseDetailsScreen
  },
  SellerDetails: {
    screen: SellerDetailsScreen
  },
  LoanCalculator: {
    screen: LoanCalculatorScreen
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
