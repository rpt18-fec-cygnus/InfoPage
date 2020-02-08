const insertSampleData = require('./seed.js');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const faker = require('faker');
//Run File to make mock data for fake restaurants

//lorem ipsum options for paragraphs/sentences
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 1
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

//create sample data here for Mendocino Farms
var mendocinoFarms = {
  name: 'Mendocino Farms',
  uid: 1,
  rating: 4.5,
  reviewCount: 131,
  cost: '$$',
  keyDesc: ['Sandwiches', 'Salad'],
  description: `At Mendocino Farms, we use a fine dining approach to flavor and the freshest Wine Country...`
}

insertSampleData(mendocinoFarms);



for (var i = 2; i < 101; i++) {
  //lorem ipsum word generation + faker company generateion + randomly generated info for restaurant
  var keyDesc = lorem.generateWords(Math.floor(1 + Math.random() * 3)).split(' ')
  var description = lorem.generateParagraphs(Math.floor(1 + Math.random() * 2));
  var companyName = faker.company.companyName();
  var score = 3 + Math.round((Math.random() * 2 * 10))/10;
  var cost = ['$', '$$', '$$$', '$$$$'][Math.floor(Math.random()*3)];
  var reviewCount = Math.floor(Math.random() * 1000);
  
  var mockRestaurant = {
    name: companyName,
    uid: i,
    rating: score,
    reviewCount: reviewCount,
    cost: cost,
    keyDesc: keyDesc,
    description: description
  }
  //save each to database
  insertSampleData(mockRestaurant);
}