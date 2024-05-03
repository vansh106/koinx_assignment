
const mongoose = require('mongoose');
const uri = "mongodb+srv://vansh106:vansh106@cluster0.ouilz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.PORT || 3000;

(async () => {
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

})();