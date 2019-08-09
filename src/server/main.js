const CoinbasePro = require('coinbase-pro');

const publicClient = new CoinbasePro.PublicClient();

export async function getProducts() {
  try {
    const products = await publicClient.getProducts();
    console.log(products);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductOrderBook() {
  try {
    const productOrderBook = await publicClient.getProductOrderBook('LTC-USD', {
      level: 3,
    });
    console.log(productOrderBook);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductTrades() {
  try {
    const productTrades = await publicClient.getProductTrades('LTC-USD', {
      after: 41172823,
    });
    console.log(productTrades);
  } catch (error) {
    console.error(error);
  }
}

export async function getTime() {
  try {
    const time = await publicClient.getTime();
    console.log(time);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductTradeStream() {
  const tradeStream = await publicClient.getProductTradeStream(
    'LTC-USD',
    36031656,
    40000000
  );
  console.log(tradeStream);
}
