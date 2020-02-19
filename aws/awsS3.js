const AWS = require('aws-sdk') 
var fs = require('fs');
var direc = __dirname;
console.log(direc)
// var fileBuffer = Buffer.from('./mendocino1.jpg')
// console.log(fileBuffer)

fs.readFile(`${__dirname}/mendocino1.jpg`, function(err, Buffer){
  console.log(Buffer);

  var params = {
    Bucket: 'taktaktaka-rpt18-fec-cygnus',
    Body: Buffer,
    Key: 'FEC.jpg',
    ACL: 'public-read'
  }

  s3 = new AWS.S3({apiVersion: '2006-03-01'});
  s3.upload(params, function(err, data) {
    console.log(err, data)
  });
})




