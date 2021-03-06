import { TabNavigator } from 'react-navigation';
import ListNavigator from '../routes/ListNavigator';
import AddHouseScreen from '../screens/AddHouseScreen';
import SearchNavigator from '../routes/SearchNavigator';

const MainNavigator = TabNavigator({
  Search: {
    screen: SearchNavigator
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

export default MainNavigator;
