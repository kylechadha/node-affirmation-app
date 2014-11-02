
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
    return console.log(error);
  }

  for (var i = 0; i < users.length; i++) {

    var currentTime = new Date();
    console.log(currentTime.getHours());
    // heroku server is on GMT, ie: +5 hours from EST

    var affirmation = "Hey mukie, guess what? ... You're hot!";

    twilio.messages.create({
      body: affirmation,
      // from: "+13239995226",
      from: "+15005550006",
      to: users[i].local.phone
    }, function(error, message) {

      if (!error) {
        console.log('Message sent on: ' + message.dateCreated + ' to ' + message.to);
      }
      else {
        console.log('There was an error with the Twilio client. Ugh whatd you do.')
      }

    });

  }

  mongoose.disconnect();

});
