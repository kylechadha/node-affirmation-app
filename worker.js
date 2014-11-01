
// Require everything you need, connection to mongoose, twilio etc.

// At the simpliest:
// You would iterate through the collection of users
// For each, send an affirmation at random

// In a realistic case:
// - Run scheduler every hour
// - Iterate through the collection of users
// - For each, check their timezone, and then check if its 8AM, 12PM, or 10PM
// - Then check their preferences, if its 8AM, and they wanted a morning text, send them one, etc.

var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

var User = require('./app/models/user.js');
var twilio = require('./config/twilio.js');

// User.findOne({ 'local.phone' :  '8582310672' }, function(err, user) {

//   user.phone = '234';
//   user.save();

//   console.log(user);
// });


User.find().exec(function(err, data) {
  console.log(data);
  response.json(data[0]);
});

// User.find().exec(function(error, user) {

//   console.log('reached');

//   if (error) {
//     return done(error);
//   }

//   if (user) {
//     console.log(user);
//   }

// });

console.log('Scheduler successfully ran :]');
process.exit();