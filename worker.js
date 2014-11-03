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

    var currentDate = new Date();
    var currentTime = currentDate.getHours() + ':00';

    // These are set in GMT, corresponding to 8AM, 1PM, and 10PM EST.
    switch (currentTime) {
      case '13:00':
        console.log('Morning affirmations are being sent!');
        sendAffirmations(users[i], currentTime);
        break;
      case '18:00':
        console.log('Afternoon affirmations are being sent!');
        sendAffirmations(users[i], currentTime);
        break;
      case '3:00':
        console.log('Evening affirmations are being sent!');
        sendAffirmations(users[i], currentTime);
        break;
    }

  }

  mongoose.disconnect();

});


var sendAffirmations = function(user, currentTime) {

  var affirmation = "Hope you're having a great day! Debug: This is the affirmation for " + user.local.name + " at: " + currentTime + '.';
  var userPreferences = user.local.timeofday;

  if (userPreferences.indexOf(currentTime) > -1) {

    twilio.messages.create({
      body: affirmation,
      from: "+13239995226",
      // from: "+15005550006",
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
