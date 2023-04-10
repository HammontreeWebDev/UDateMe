import React from 'react';
import './App.css';

// Import Apollo Client (Front End): 
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Import Front End Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Auth files for jwt token:
import Auth from './utils/auth';

// Import Pages -> Below:
// * 1) Landing (<Login> , <Signup>)
// * 2) Dashboard (<Conversation>, <Restaurant>, <Entertainment>)
// * 3) PartnerProfile (<PartnerHome>, <Quiz>)

import Landing from './pages/Landing';

// HTTP LINK for graphQL:
const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const myHttpLink = authLink.concat(httpLink);

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: myHttpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

    <Landing/>
    
    </ApolloProvider>
  );
}

export default App;
