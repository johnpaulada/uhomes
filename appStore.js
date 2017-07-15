import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { ApolloClient } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';
import * as reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql'
});

const apolloClient = new ApolloClient({networkInterface});

const combinedReducers = combineReducers({
  apollo: apolloClient.reducer(),
  ...reducers
})

const store = createStore(combinedReducers, {}, applyMiddleware(apolloClient.middleware()));

export { store, apolloClient };
