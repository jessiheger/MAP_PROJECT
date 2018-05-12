var express 		= require('express');
var request			= require('request');
var router 			= express.Router();
var mongoose		= require('mongoose');

var User 			= require('../models/user');
var Trip 			= require('../models/tripmodel');

// RENDERS PAGE TO ADD A TRIP

router.get('/', function(req, res) {
	//TODO: Query tripmodel for list of trips
	res.JSON({trips});
});

// Adds a trip to a user
router.post('/', function(req, res) {
  console.log('POST A TRIP', req.body);
  // now my req.body has TWO keys: newTrip and user
  User.findById(req.body.user.id ).populate('trips').then(user => {
  	console.log('found a user', user);
  	Trip.create( req.body.newTrip ).then(myNewTrip => {
		console.log("New Trip looks like", myNewTrip);
		user.trips.push(myNewTrip);
		console.log("pushed the trip");
		user.save().then(result => {
			console.log('got saved!');
			res.json(myNewTrip);
		}).catch(err => {
			console.log('not saved', err);
			res.send('not saved');
		});
  	}).catch(err => {
  		console.log('rawr', err);
  		res.send('rawr trip create fails');
  	});
  })
  .catch(err => {
  	console.log('darn', err);
  	return res.status(500).send('gah');
  });		
});

module.exports = router;