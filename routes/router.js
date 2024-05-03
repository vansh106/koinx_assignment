const express = require('express');
const transactionController = require('../controllers/transactionController');
const ethPriceController = require('../controllers/ethPriceController');


const router = express.Router();

router.get('/transactions/:address', async (req, res) => {

  const address = req.params.address;
  try {
    const transactions = await transactionController.getTransactions(address);
    console.log(transactions)
    await transactionController.saveTransactions(transactions, address);
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching transactions' });
  }

});



module.exports = router;