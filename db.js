var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String, 
    unique: true
  }, 
  age: String,
  location: String,
  description: String
});

var User = mongoose.model('user', UserSchema);

var dbUrl = process.env.MONGOHQ_URL || 'mongodb://localhost/test3'

mongoose.connect(dbUrl);
