const axios = require('axios');
const EthPrice = require('./../models/ethPrice');
const API_ENDPOINTS = require('./../contants/apiContants');


const fetchEthereumPrice = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.Eth_Price);
        const ethPrice = response.data.ethereum.inr;
        console.log(ethPrice)
        return ethPrice;
    } catch (error) {
        console.error('Error fetching Ethereum price:', error);
        throw error;
    }
};

const saveEthPrice = async (price) => {
    const newPrice = new EthPrice({ price });
    await newPrice.save();
};

module.exports = {
    saveEthPrice,
    fetchEthPriceFromDB,
};