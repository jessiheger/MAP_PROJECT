var express 		= require('express');
var request			= require('request');
var router 			= express.Router();
var mongoose		= require('mongoose');

var User 			= require('../models/user');
var Trip 			= require('../models/tripmodel');
// var Destination 	= require('../models/destinationmodel');


// Renders page to add a trip
router.get('/', function(req, res) {
	res.render('trip', {currentUser: res.locals.currentUser});
});


// Adds destination to user's trip
router.post('/trip', function(req, res) {
	console.log(req.body)
 //  User.findOne({ email: this.state.user.email })
 //  console.log("User looks like," User);
 //  .then() => {
	// Trip.create(req.body)
	// console.log("Trip looks like," Trip)
	// 		.then(function(createdTrip){
	// 			Destination.create(req.body, (err, destination) => {
	// 				createdTrip.destinations.push(destination);
	// 			}
	// 		})
		// Trip.destination.push(destination);
		// }
		// user.save();
	});


	// }
  }) (err, user) => {
      console.log(req.body)
      // find trip, add destination ; if no trip, then create one
      Trip.findOne({name: name}, (err, trip) => {
      	user.trip.push(trip); 
      	console.log(trip)
      // if no trip, add destination
	    // Destination.create(req.body, (err, destination) => {
	    //     trip.destinations.push(destination); 
	    // save user
	    })
	        user.save();
      })
  });
  res.send("success");
});

module.exports = router;