var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


// Schema
// ----------------------------------------------

var userSchema = mongoose.Schema({

  local : {
    phone : Number,
    name : String,
    email : String,
    password : String,
    alertType : String,
    timeOfDay : String,
    affectionLevel : String,
    affirmationType : String
  }

  // ** Still need to add social schema, if so desired.

});


// Methods
// ----------------------------------------------

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
