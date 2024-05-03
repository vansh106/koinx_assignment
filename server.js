const express = require('express');
const mongoose = require('mongoose');
const transactionsRouter = require('./routes/transactions');
require('dotenv').config({path:__dirname+'/cred.env'});

const app = express();
const port = process.env.PORT || 3000;

(async () => {

  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB!');

  app.use('/api/v1', transactionsRouter); 

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();