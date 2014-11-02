
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

    var currentHour = new Date().getHours();

    switch (currentHour) {
      case 13:
        console.log('Morning affirmations are being sent!');
        sendAffirmations(users[i], currentHour);
        break;
      case 17:
        console.log('Afternoon affirmations are being sent!');
        sendAffirmations(users[i], currentHour);
        break;
      case 3:
        console.log('Evening affirmations are being sent!');
        sendAffirmations(users[i], currentHour);
        break;
    }

  }

  mongoose.disconnect();

});


var sendAffirmations = function(user, time) {

  var affirmation = "Hey mukie, guess what? ... You're hot!";
  var userPreferences = user.local.times;

  if (userPreferences.indexOf(time) > -1) {

    twilio.messages.create({
      body: affirmation,
      // from: "+13239995226",
      from: "+15005550006",
      to: user.local.phone
    }, function(error, message) {
      if (!error) {
        console.log('Message sent on: ' + message.dateCreated + ' to ' + message.to);
      } else {
        console.log('There was an error with the Twilio client. Ugh whatd you do.')
      }
    });

  } 

}
