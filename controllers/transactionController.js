const Transaction = require('./../models/transaction');
const axios = require('axios');

const getTransactions = async (address) => {
//   const apiKey = process.env.ETHERSCAN_API_KEY;

  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=3D8ZSUTI5YZC7HEJ5CEB3MNU452NRZAB6S
    `);
    const transactions = response.data.result;
    return transactions;
  } catch (error) {
    throw new Error('Error fetching transactions');
  }
};

const saveTransactions = async (transactions, address) => {
  try {
    
    const existingTransactions = await Transaction.find({ address });
    console.log(existingTransactions)
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