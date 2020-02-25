const express = require('express');
const app = express();
const port = 7000;
const proxy = require('http-proxy-middleware')
const {getRestaurantByID, getRestaurantByName} = require('../mockData/dbHelper.js');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/', express.static('public'));

//toggle for proxy versus service
app.use('/restaurant/:restaurantId', express.static('public'));
app.use('/restaurantName/:restaurantName', express.static('public'));

app.get('/api/restaurant/:restaurantId', (req, res) => {
  // console.log(`this is req.params: ${req.params.restaurantId}`)
  getRestaurantByID(req.params.restaurantId, (data) => {
    res.send(data);
  });
});

app.get('/api/restaurantName/:restaurantName', (req, res) => {
  // console.log(`this is req.params: ${req.params.restaurantId}`)
  // res.send('endpoint works')
  getRestaurantByName(req.params.restaurantName, (data) => {
    res.send(data);
  });
});

app.patch('/api/updateScore', (req, res) => {
  console.log(req.body);
  res.send('update mongoDB for InfoService')
})

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));