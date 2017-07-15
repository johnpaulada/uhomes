import { TabNavigator } from 'react-navigation';
import MainContainer from '../containers/MainContainer';

const MainNavigator = TabNavigator({
  Main: {
    screen: MainContainer,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MainNavigator;
