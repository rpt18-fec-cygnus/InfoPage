var mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost/mockRestaurants', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connect('mongodb+srv://dbUser:ulmscxCrdbphfO7F@mockrestaurants-9c1d0.mongodb.net/mockRestaurants?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {console.log(err)};
  console.log('connected to mongoDB Atlas database!')
});

module.exports = db;

