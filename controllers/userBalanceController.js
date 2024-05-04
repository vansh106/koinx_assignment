const Transaction = require('../models/transaction');

const getUserBalance = async (req, res) => {
    const address = req.params.address;

    if (!address) {
        return res.status(400).json({ message: 'Missing wallet address parameter' });
    }

    try {
        const transactions = await Transaction.find({ $or: [{ to: address }, { from: address }] });
        let balance = 0;
        // NOTE : Eth Txns value field is in "wei unit
        for (const transaction of transactions) {
            if (transaction.to === address) {
                balance += Number(transaction.value) / 10 ** 18
            } else {
                balance -= Number(transaction.value) / 10 ** 18
            }
        }
        res.json(balance);
    } catch (err) {
        return res.status(500).json({ message: 'Server error, cant find transactions' });
    }
};

module.exports = {
    getUserBalance
};