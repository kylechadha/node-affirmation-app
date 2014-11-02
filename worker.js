
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

User.find().exec(function(error, users, done) {

  if (error) {
    return done(error);
  }

  for (var i = 0; i < users.length; i++) {

    var currentTime = new Date();
    console.log(currentTime.getHours());

    var message = "Hey mukie, guess what? ... You're hot!";

    // twilio.messages.create({
    //   body: message,
    //   from: "+13239995226",
    //   to: users[i].local.phone
    // }, function(err, message) {
    //   console.log(message);
    // });

  }

  done(process.exit());

});

console.log('Scheduler successfully ran :]');
