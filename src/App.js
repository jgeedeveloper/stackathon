import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {
//   getProducts,
//   getProductOrderBook,
//   getProductTrades,
//   getTime,
// } from './cryptofunctions/main';

// const key = '6b6958989ac091adba1759c4ae78cabf';
// const secret =
//   '/exP/qbbQj5YYbGEJlxc/O3IXmeQB6VtnSJljUCNu4GbETJr/idnQY/QKeF4pnUso85gc5tuAzxNr9NIBozwgA==';
// const passphrase = '4q1l2n2cyct';

const CoinbasePro = require('coinbase-pro');

// const orderbook = new CoinbasePro.Orderbook();
const websocket = new CoinbasePro.WebsocketClient(
  ['XRP-USD'],
  'wss://ws-feed.pro.coinbase.com',
  {
    key: '6b6958989ac091adba1759c4ae78cabf',
    secret:
      '/exP/qbbQj5YYbGEJlxc/O3IXmeQB6VtnSJljUCNu4GbETJr/idnQY/QKeF4pnUso85gc5tuAzxNr9NIBozwgA==',
    passphrase: '4q1l2n2cyct',
  },
  { channels: ['full', 'level2'] }
);

// const websocket = new CoinbasePro.WebsocketClient(['XRP-USD']);

// websocket.on('message', error => {
//   console.error(error);
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
