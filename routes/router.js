const express = require('express');
const transactionController = require('../controllers/transactionController');
const ethPriceController = require('../controllers/ethPriceController');
const userBalanceController = require('../controllers/userBalanceController');

const router = express.Router();

router.get('/transactions/:address', transactionController.processTransaction);

router.get('/ethPrice', ethPriceController.fetchEthPriceFromDB);

router.get('/addressBalance/:address', userBalanceController.getAddressBalance);

module.exports = router;