// May want to increase the security of these components in the future
var accountSid = 'AC30ea0b2e26c3293997fbf599981fd28c';
var authToken = '0972510307bc4eb384fc54dd4fb2fe2c';
var client = require('twilio')(accountSid, authToken);

module.exports = {
  messages : client.messages
}