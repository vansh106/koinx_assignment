const API_ENDPOINTS = {
    Eth_Transactions: (address, apiKey, endBlock) => `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=${endBlock}&page=1&offset=10&sort=asc&apikey=${apiKey}`,
    Eth_Price :  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr',
};

module.exports = API_ENDPOINTS;