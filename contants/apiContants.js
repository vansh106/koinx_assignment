const API_ENDPOINTS = {
    Eth_Transactions: (address, apiKey) => `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${apiKey}`,
    
};

module.exports = API_ENDPOINTS;