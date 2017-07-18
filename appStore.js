import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { ApolloClient } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';
import * as reducers from './reducers';
import Config from './env.json';

const networkInterface = createNetworkInterface({
  uri: Config.GRAPHQL_URL
});

// networkInterface.useAfter([{
//   applyAfterware({ response }, next) {
//     const reader = new FileReader();
//
//     // Process text after being read
//     reader.addEventListener('loadend', (e) => {
//       console.log(e.srcElement.result);
//     });
//
//     // Start reading text from response blob
//     reader.readAsText(response._bodyBlob);
//
//     next();
//   }
// }]);

const apolloClient = new ApolloClient({networkInterface});

const combinedReducers = combineReducers({
  apollo: apolloClient.reducer(),
  ...reducers
})

const store = createStore(combinedReducers, {}, applyMiddleware(apolloClient.middleware()));

export { store, apolloClient };
