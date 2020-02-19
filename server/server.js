const express = require('express');
const app = express();
const port = 7000;
const proxy = require('http-proxy-middleware')
const {getRestaurantByID} = require('../mockData/dbHelper.js');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());


app.use('/', express.static('public'));

//toggle for proxy versus service
app.use('/restaurant/:restaurantId', express.static('public'))
app.get('/api/restaurant/:restaurantId', (req, res) => {
  // console.log(`this is req.params: ${req.params.restaurantId}`)
  getRestaurantByID(req.params.restaurantId, (data) => {
    res.send(data);
  });
});

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));