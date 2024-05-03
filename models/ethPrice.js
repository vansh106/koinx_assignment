const mongoose = require('mongoose');

const ethPriceSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  price: Number,
}, { collection : 'prices' });

module.exports = mongoose.model('EthPrice', ethPriceSchema);