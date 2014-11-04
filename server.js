

require('./db.js')

var express = require('express'); 

var mongoose = require('mongoose');
var User = mongoose.model('user');

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

app.get('/delete/:name', function(request, response) {
  User.findOne({name: request.params.name}, function(err, user){
    user.remove();
    response.end();
  })
})

app.post('/updateuser/', function(request, response) {
  var user = request.body;
  User.findOneAndUpdate({name: request.params.name},{
    name: user.name,
    age: user.age,
    location: request.body.location,
    description: request.body.description
  },{upsert: true}, function(err, data){
    if(err) { console.log(err) }
      response.end();
  })
})

var port = process.env.PORT || 3000

app.listen(port);



//bodypaser is middleware.


// where do you install modules/dependencies? global or local? task runners?
