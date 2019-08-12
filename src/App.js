import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Chart from './components/chart';
// import
// getProducts,
// getProductOrderBook,
// getProductTrades,
//   getTime,
//   getProductTradeStream,
// './server/main';
import Styled from 'styled-components';
// import { tradebook } from './server/dbVars';

const GraphContainer = Styled.div`
  display: flex;
  justify-content: center;
`;

// let tradebookPrices = tradebook.map(price => {
//   return Number(price.price);
// });

function App() {
  return (
    <div className="App">
      <h1>Crypto Trade Tests</h1>
      <GraphContainer>
        <Chart />
      </GraphContainer>
    </div>
  );
}

export default App;
