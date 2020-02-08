const express = require('express');
const app = express();
const port = 7000;
const proxy = require('http-proxy-middleware')
const {getRestaurantByID} = require('../mockData/dbHelper.js');
const cors = require('cors');

app.use(cors());


app.use(express.static('public'));
// app.use(
//   '/restaurant',
//   proxy({target: 'http://localhost:7000'})
// )

// app.get('/restaurantInfo', (req, res) => {
//   getRestaurantByID(1, (data) => {
//     res.send(data);
//   })
// })

app.get('/restaurant/:restaurantId', (req, res) => {
  console.log(`this is req.params: ${req.params.restaurantId}`)
  getRestaurantByID(req.params.restaurantId, (data) => {
    res.send(data);
  });
})

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));