import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getProducts, getProductOrderBook } from './cryptofunctions/main';

function App() {
  console.log(getProductOrderBook());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
