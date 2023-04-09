import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages -> Below:
import Landing from './pages/Landing';

// * 1) Landing (<Login> , <Signup>)
// * 2) Dashboard (<Conversation>, <Restaurant>, <Entertainment>)
// * 3) PartnerProfile (<PartnerHome>, <Quiz>)

function App() {
  return (
    <Landing/>
  );
}

export default App;
