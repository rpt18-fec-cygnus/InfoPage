const Restaurant = require('./data.js');
const db = require('./index.js')
const mongoose = require('mongoose');

var getRestaurantByID = function(search, callback) {
  var query;

  //req.params returns string. Convert search to number if it is a number
  var memSearch = search;
  if(Number(search) !== NaN) {
    search = Number(search);
  } else {
    search = memSearch;
  }
  // console.log(search)

  if (typeof(search) === 'string') {
    //if type is string, query with name
    query = {name: search}
  } else {
    //should query search with uid
    query = {uid: search}
  }
  
  //search with query object
  Restaurant.findOne(query)
    .then((data) => {
      callback(data);
    })
    .catch(err => console.log(err))
}

var getRestaurantByName = function (search, callback) {
    // var search = "Mendocino_Farms"
    //search will always be a string
    //use regex to replace all instances of _ with space
    var queryName = search.replace(/_/gi, ' ')
    query = {name: queryName}
    console.log(queryName)
    //search with query object
    Restaurant.findOne(query)
    .then((data) => {
      callback(data);
    })
    .catch(err => console.log(err))
}

module.exports = {getRestaurantByID, getRestaurantByName}
  