import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { ApolloClient } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';
import * as reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj54v6jmikwaf0196s8c28f3n'
});

const apolloClient = new ApolloClient({networkInterface});

const combinedReducers = combineReducers({
  apollo: apolloClient.reducer(),
  ...reducers
})

const store = createStore(combinedReducers, {}, applyMiddleware(apolloClient.middleware()));

export { store, apolloClient };
