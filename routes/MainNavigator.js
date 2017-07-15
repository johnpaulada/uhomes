import { TabNavigator } from 'react-navigation';
import ListNavigator from '../routes/ListNavigator';
import AddHouseScreen from '../screens/AddHouseScreen';
import SearchScreen from '../screens/SearchScreen';

const MainNavigator = TabNavigator({
  List: {
    screen: ListNavigator
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
  }
});

export default MainNavigator;
