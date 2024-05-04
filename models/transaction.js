const mongoose = require('mongoose');
const Ajv = require('ajv');

const transactionSchema = new mongoose.Schema({
    blockNumber: String,
    timeStamp: String,
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
}, { collection: 'transactions' });


module.exports = mongoose.model('Transaction', transactionSchema);
