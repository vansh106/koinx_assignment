const Transaction = require('./../models/transaction');
const axios = require('axios');
const API_ENDPOINTS = require('./../contants/apiContants');
require('dotenv').config({path:__dirname+'/../cred.env'});


const getTransactions = async (address) => {
    const apiKey = process.env.ETHERSCAN_API_KEY;
    
    try {
        const response = await axios.get(API_ENDPOINTS.Eth_Transactions(address, apiKey));
        const transactions = response.data.result;
        return transactions;
    } catch (error) {
        throw new Error('Error fetching transactions');
    }
};

const saveTransactions = async (transactions, address) => {
    try {

        const existingTransactions = await Transaction.find({ address });
        // console.log(existingTransactions)
        if (!existingTransactions.length) {
            await Transaction.insertMany(transactions);
        }
    } catch (error) {
        throw new Error('Error saving transactions');
    }
};

module.exports = {
    getTransactions,
    saveTransactions,
};