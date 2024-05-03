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

const fetchEthPriceFromDB = async () => {
    try {
        const latestPrice = await EthPrice.find().sort({ timestamp: -1 }).limit(1);

        if (latestPrice.length > 0) {
            const price = latestPrice[0].price;
            console.log('Latest Ethereum price:', price);
            return price
        } else {
            console.log('No Ethereum price entries found in the database.');
        }
    } catch (error) {
        console.error('Error fetching latest Ethereum price:', error);
    }
};

module.exports = {
    fetchEthereumPrice,
    saveEthPrice,
    fetchEthPriceFromDB,
};