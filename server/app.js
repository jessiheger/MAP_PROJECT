require('dotenv').config();
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var expressJWT = require('express-jwt');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var app = express();


// Mongoose connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/travelers', {useMongoClient: true});

// Set up middleware
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true}));

// Controllers: auth routes
// Now any route that it's in /auth is token-protected
// connected to routes/auth.js and HandleSubmit() in signup.js
app.use('/trip', require('./routes/trip'));
app.use('/destination', require('./routes/destination'));
app.use('/user', require('./routes/triplist'));
app.use('/viewtrip', require('./routes/viewtrip'));


app.use('/auth', expressJWT({
	// make it necessary to have a token beore you can access any of these routes 
	secret: process.env.JWT_SECRET,
	// getToken will parse out the token from the request; when we try to access the user w/ a token they already have, 
	getToken: function fromRequest(req){
		// will look for the authorization, and parse out the word "bearer" from the authorization (someone with a token will have this word attached to their token)
		if(req.body.headers.Authorization && 
			req.body.headers.Authorization.split(' ')[0] === 'Bearer'){
			return req.body.headers.Authorization.split(' ')[1];
		}
		return null;
	}
}).unless({
	// paths for the login or signups POST method are UNprotected (not need to be an active user to see these pages)
	path: [
	{url: '/auth/login', methods: ['POST']},
	{url: '/auth/signup', methods: ['POST']}
	]
}), require('./routes/auth'));

// module.exports = app;
app.listen(process.env.PORT || 3001)
