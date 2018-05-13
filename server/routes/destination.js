var express 		= require('express');
var request			= require('request');
var router 			= express.Router();
var mongoose		= require('mongoose');

var User 			= require('../models/user');
var Trip 			= require('../models/tripmodel');
var Destination 	= require('../models/destinationmodel');


// Renders page to add a trip
router.get('/', function(req, res) {
	//TODO: Query tripmodel for list of trips
	res.send({ landmark: "Space Needle", city: "Seattle", state: "Washington", country: "USA", Image: "MYIMAGE" });
});


// Adds a trip to a user 
// Save destination. Add destination to trip. Add trip to user
router.post('/', function(req, res) {
  console.log('req.body:', req.body);
  console.log('req.body.tripId', req.body.tripId);
  
  Destination.create( req.body.newDestination )
    .then(myNewDest => {
      myNewDest.save();
      Trip.findById( req.body.tripId )
        .then(trip => {
          trip.destinations.push(myNewDest);
          trip.save();
          User.findById( req.body.user.id )
            .then(user => {
              user.trips.push(trip);
            })
        })
    })
});

// router.post('/', function(req, res) {
//   console.log('POST A DESTINATION', req.body);
//   // res.send('trip post stub');
//   User.findById( req.body.user.id ).then(user => {
//   	console.log('found a user', user);
//     console.log('user.trip:', user.trips)
//     User.findById( user.trips ).then(trip => {
//       Destination.create( req.body.newDestination ).then(myNewDest => {
//         console.log("New Dest Looks likes:", myNewDest); // GETS HERE BUT NO FURTHER
//         user.trip.push(myNewDest);
//         console.log("pushed the new destination");

//     })
  	
//   });
// });
// });

module.exports = router;