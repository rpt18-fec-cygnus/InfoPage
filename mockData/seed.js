const db = require('./index.js');
const Restaurant = require('./data.js');

//save sample data into db here
var insertSampleData = function(sampleData) {
  var restaurant = new Restaurant(sampleData);
  restaurant.save((err, data) => {
    if (err){return console.error(err)}
  })
}

module.exports = insertSampleData;