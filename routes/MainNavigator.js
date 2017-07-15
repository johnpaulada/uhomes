import { TabNavigator } from 'react-navigation';
import MainContainer from '../containers/MainContainer';
import MainScreen from '../screens/MainScreen';

const MainNavigator = TabNavigator({
  Main: {
    screen: MainScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MainNavigator;
