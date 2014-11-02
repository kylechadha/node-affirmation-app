// May want to increase the security of these components in the future
var testSid = 'AC2c1eac8fa16d00d2fd7b7a62b8fb181b';
var testToken = '36fb69e0fdc6403be87bcdac8faf64f3';

var accountSid = 'AC30ea0b2e26c3293997fbf599981fd28c';
var authToken = '0972510307bc4eb384fc54dd4fb2fe2c';

// var client = require('twilio')(accountSid, authToken);
var client = require('twilio')(testSid, testToken);

module.exports = {
  messages : client.messages
}