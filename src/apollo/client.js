import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://delarashopper.myshopify.com/api/graphql',
    fetch,
    headers: {
        "X-Shopify-Storefront-Access-Token": "6485be5ab268776178b3ea3e33760967" 
    }
  }),
  cache: new InMemoryCache()
});