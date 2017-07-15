import { StackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';

const AppNavigator = StackNavigator({
  Home: {
    screen: MainNavigator,
  }
});

export default AppNavigator;