import { StackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import { connect } from 'react-redux';

const AppNavigator = StackNavigator({
  Home: {
    screen: MainNavigator,
  }
});

export default AppNavigator;
