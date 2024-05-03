const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  blockNumber: String,
  timeStamp: Number,
  hash: String,
  from: String,
  to: String,
  value: String,
  contractAddress: String,
  input: String,
  type: String,
  gas: String,
  gasUsed: String,
  traceId: String,
  isError: String,
  errCode: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);


//3D8ZSUTI5YZC7HEJ5CEB3MNU452NRZAB6S

// https://api.etherscan.io/api
//    ?module=account
//    &action=txlistinternal
//    &address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
//    &startblock=0
//    &endblock=2702578
//    &page=1
//    &offset=10
//    &sort=asc
//    &apikey=3D8ZSUTI5YZC7HEJ5CEB3MNU452NRZAB6S

