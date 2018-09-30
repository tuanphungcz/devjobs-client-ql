import React from 'react';
import { StaticRouter } from 'react-router-dom';
import cookieParser from 'cookie-parser';
import { ApolloLink } from 'apollo-link';
import express from 'express';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import 'isomorphic-fetch';
import { ServerStyleSheet } from 'styled-components';
import { getDataFromTree, ApolloProvider } from 'react-apollo';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset';
import injectGlobalStyles from './injectGlobalStyles';
import App from './App';

const httpLink = new HttpLink({ uri: 'https://board-ql-wdwfwimsvz.now.sh' });

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(cookieParser());

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const context = {};

    const sheet = new ServerStyleSheet();

    const tokenValue = req.cookies && req.cookies.AUTH_TOKEN;

    const middlewareLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          Authorization: tokenValue ? 'Bearer ' + tokenValue.slice(1, -1) : '',
        },
      });
      return forward(operation);
    });

    const httpLinkAuth = middlewareLink.concat(httpLink);

    const client = new ApolloClient({
      link: ApolloLink.from([httpLinkAuth]),
      cache: new InMemoryCache(),
      ssrMode: true,
    });

    const Root = () => (
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <App tokenValue={tokenValue} />
        </StaticRouter>
      </ApolloProvider>
    );

    await getDataFromTree(<Root />);

    const markup = renderToString(sheet.collectStyles(<Root />));

    const helmet = Helmet.renderStatic();
    const styleTags = sheet.getStyleTags();

    const initialApolloState = client.extract();

    injectGlobalStyles();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(`<!doctype html>
      <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
      <meta http-equiv="Content-type" content="text/html; charset=UTF-8">

      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <script>
          window.__APOLLO_STATE__=${JSON.stringify(initialApolloState).replace(/</g, '\\u003c')};
        </script>
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
          <!-- Render the style tags gathered from the components into the DOM -->      
          ${styleTags}

      </head>
      <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${markup}</div>
      </body>
  </html>`);
    }
  });

export default server;
