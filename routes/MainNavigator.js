import { TabNavigator } from 'react-navigation';
import ListScreen from '../screens/ListScreen';
import AddHouseScreen from '../screens/AddHouseScreen';
import SearchScreen from '../screens/SearchScreen';

const MainNavigator = TabNavigator({
  List: {
    screen: ListScreen
  },
  AddHouse: {
    screen: AddHouseScreen
  },
  Search: {
    screen: SearchScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MainNavigator;
