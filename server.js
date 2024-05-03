const express = require('express');
const mongoose = require('mongoose');
const transactionsRouter = require('./routes/transactions');

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  await mongoose.connect("mongodb+srv://vansh106:vansh106@cluster0.ouilz.mongodb.net/");
  console.log('Connected to MongoDB');

  app.use('/api/v1', transactionsRouter); // Mount API routes under /api/v1

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();