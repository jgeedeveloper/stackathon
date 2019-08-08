const CoinbasePro = require('coinbase-pro');

// const key = '6b6958989ac091adba1759c4ae78cabf';
// const secret =
//   '/exP/qbbQj5YYbGEJlxc/O3IXmeQB6VtnSJljUCNu4GbETJr/idnQY/QKeF4pnUso85gc5tuAzxNr9NIBozwgA==';
// const passphrase = '4q1l2n2cyct';

// const apiURI = 'https://api.pro.coinbase.com';
// const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';

const publicClient = new CoinbasePro.PublicClient();
// const authedClient = new CoinbasePro.AuthenticatedClient(
//   key,
//   secret,
//   passphrase,
//   apiURI
// );

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
    const productOrderBook = await publicClient.getProductOrderBook('XRP-USD', {
      level: 2,
    });
    console.log(productOrderBook);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductTrades() {
  try {
    const productTrades = await publicClient.getProductTrades('XRP-USD');
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
