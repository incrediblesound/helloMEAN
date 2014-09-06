var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String, 
    unique: true
  }, 
  age: Number,
  location: String,
  description: String
});

var User = mongoose.model('user', UserSchema);

mongoose.connect('mongodb://localhost/test2');
