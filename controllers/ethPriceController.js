const axios = require('axios');
const EthPrice = require('./../models/ethPrice');
const API_ENDPOINTS = require('./../contants/apiContants');


const asd = async (_, res) => {
    const price = await ethPriceController.fetchEthPriceFromDB();
}

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

const fetchEthPriceFromDB = async (_, res) => {
    try {
        const latestPrice = await EthPrice.find().sort({ timestamp: -1 }).limit(1);

        if (latestPrice.length > 0) {
            const price = latestPrice[0].price;
            console.log('Latest Ethereum price:', price);
            res.json(price);

        } else {
            console.log('No Ethereum price entries found in the database.');
            res.status(500).json({ message: 'Ethereum price is still yet to be stored for first time in DB' });
        }
    } catch (error) {
        console.error('Error fetching latest Ethereum price:', error);
        res.status(500).json({ message: 'Error fetching eth price from database' });
    }
};

module.exports = {
    fetchEthereumPrice,
    saveEthPrice,
    fetchEthPriceFromDB,
};