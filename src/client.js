import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset';
import { getStorage } from './utils';
import injectGlobalStyles from './injectGlobalStyles';
import { AUTH_TOKEN } from './constant';
import App from './App';

// import why from 'why-did-you-update';
// why(React);

const httpLink = new HttpLink({ uri: 'https://board-ql-wdwfwimsvz.now.sh' });

const tokenValue = getStorage(AUTH_TOKEN);

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  });
  return forward(operation);
});

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link: ApolloLink.from([httpLinkAuth]),
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

injectGlobalStyles();

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
