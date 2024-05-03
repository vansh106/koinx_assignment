const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number, //
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
  },
  value: {
    type: String,
    required: true,
  },
  contractAddress: {
    type: String,
  },
  input: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  gas: {
    type: String,
    required: true,
  },
  gasUsed: {
    type: String, 
    required: true,
  },
  traceId: {
    type: String,
    required: true,
  },
  isError: {
    type: String,
    required: true,
  },
  errCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);


//3D8ZSUTI5YZC7HEJ5CEB3MNU452NRZAB6S

https://api.etherscan.io/api
   ?module=account
   &action=txlistinternal
   &address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
   &startblock=0
   &endblock=2702578
   &page=1
   &offset=10
   &sort=asc
   &apikey=3D8ZSUTI5YZC7HEJ5CEB3MNU452NRZAB6S

