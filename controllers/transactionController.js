const Transaction = require('./../models/transaction');
const axios = require('axios');
const API_ENDPOINTS = require('./../contants/apiContants');
require('dotenv').config({ path: __dirname + '/../cred.env' });


const processTransaction = async (req, res) => {
    const address = req.params.address;
    try {
        const transactions = getTransactions(address);
        await saveTransactions(transactions, address);
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching transactions' });
    }
};


const getTransactions = async (address) => {
    const apiKey = process.env.ETHERSCAN_API_KEY;
    const endBlock = process.env.ETHEREUM_ENDBLOCK;

    try {
        const response = await axios.get(API_ENDPOINTS.Eth_Transactions(address, apiKey, endBlock));

        const transactions = response.data.result;
        // console.log(transactions)
        return transactions;
    } catch (error) {
        throw new Error('Error fetching transactions');
    }


};

const saveTransactions = async (transactions, addresss) => {

    try {
        const existingTransactions = await Transaction.find({ from: addresss }).exec();

        if (existingTransactions.length > 0) {

            await Transaction.deleteMany({ from: addresss }).exec();
            await Transaction.insertMany(transactions);
            console.log("Transactions updated for " + addresss)
        } else {

            await Transaction.create(transactions);
            console.log('Transactions saved successfully for ' + addresss);
        }

    } catch (error) {
        console.error('Error saving transactions:', error);
    }
};



module.exports = {
    processTransaction,
};