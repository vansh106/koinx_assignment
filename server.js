const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes/router');
const schedule = require('node-schedule');

const ethPriceController = require('./controllers/ethPriceController');

require('dotenv').config({path:__dirname+'/cred.env'});

const app = express();
const port = process.env.PORT || 3000;

(async () => {

  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB!');

  const _ = schedule.scheduleJob('*/10 * * * *', async () => { 
    const price = await ethPriceController.fetchEthereumPrice();
    await ethPriceController.saveEthPrice(price); 
  });

  app.use('/api/v1', Router);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();