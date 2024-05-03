const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.get('/transactions/:address', async (req, res) => {
  console.log("henlo")

  const address = req.params.address;
  console.log(address)
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