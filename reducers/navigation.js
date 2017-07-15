import { NavigationActions } from 'react-navigation';
import AppNavigator from '../routes/AppNavigator';

console.log(AppNavigator);

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
}
