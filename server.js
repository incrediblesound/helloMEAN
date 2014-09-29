

require('./db.js')
// mongoose schema must be loaded first

var express = require('express'); 
// bootstraps express server, does that mean no node code?

var mongoose = require('mongoose');
var User = mongoose.model('user');
// standard mongoose pattern

// bootstraps express server
var bodyParser = require('body-parser'); 
// converts form data to object accessible thru request.body

// var session = require('express-session');
// request.session POJO

var app = express();
// kicks off the app
console.log(app);

app.use(bodyParser());
// body parser depricated?

// app.use(session({ 
//   secret: 'string', 
//   resave: true, 
//   saveUninitialized: true
// }));

app.use(express.static('./client/'));
//serves html in the client directory? Does it 


// posts to mongodb
app.post('/user', function(request, response) {
  console.log(request.body);
// new instance of constructor
  new User({
    name: request.body.name,
    age: request.body.age,
    location: request.body.location,
    description: request.body.description
  })
  .save(function(err, user){
    console.log(err);
    console.log(user);
    response.redirect('/');
  });
});

//ought refactor to modules later at some point in the future
app.get('/getusers', function(request, response) {
  User.find(function(err, users){
    users = JSON.stringify(users);
    response.end(users)
  });
});

app.get('/getuser/:name', function(request, response) {
  User.findOne({name: request.params.name}, function(err, user){
    user = JSON.stringify(user);
    response.end(user)
  });
});

app.listen(3000);



//bodypaser is middleware.


// where do you install modules/dependencies? global or local? task runners?
