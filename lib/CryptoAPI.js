const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      });
      const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);
      //sort by highest current price
      res.data.sort((coin1, coin2) => coin2.price - coin1.price);
      return this.format(res, formatter);
    } catch (err) {
      handleAPIerror(err);
    }
  }

  format(res, formatter) {
    let output = '';
    res.data.forEach(coin => {
      output += `Coin: ${coin.symbol.yellow}(${coin.name}) | Current price: ${formatter.format(coin.price).green} |  Highest price ever: ${formatter.format(coin.high).blue} | Circulating coins: ${coin.circulating_supply.magenta}\n`;
    });
    return output;
  }
}

function handleAPIerror(err) {
  if (err.response) {
    if (err.response.status === 401) {
      throw new Error('API key invalid');
    } else if (err.response.status === 404) {
      throw new Error('API not responding');
    } else {
      throw new Error('Error!');
    }
  } else {
    throw err;
  }

}
module.exports = CryptoAPI;