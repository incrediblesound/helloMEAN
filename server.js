var express = require('express'); 
// bootstraps express server
// var bodyParser = require('body-parser'); 
// // converts form data to object accessible thru request.body
// var session = require('express-session');
//request.session POJO


var app = express();
// kicks off the app

// app.use(bodyParser());
// // body parser depricated?

// app.use(session({ 
//   secret: 'string', 
//   resave: true, 
//   saveUninitialized: true
// }));

app.use(express.static('./client/'));
//serves html in the client directory? 

app.listen(3000);

//bodypaser is middleware.


// where do you install modules/dependencies? global or local? task runners?
// nested controllers t
