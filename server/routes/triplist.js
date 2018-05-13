var express 		= require('express');
var request			= require('request');
var router 			= express.Router();
var mongoose		= require('mongoose');

var User 			= require('../models/user');
var Trip 			= require('../models/tripmodel');

// takes userID info from the triplist compononent and finds the user in the DB
// THEN sends the user's trips to the front end
router.get('/:id/trips', function(req, res){
	User.find({ _id: req.params.id }, function(err, user) {
		res.send(user);
	})
});

router.get('/profile/:userId', function(req, res) {
	console.log(req.params.userId);
	User.findById(req.params.userId, (err, userParam) => {
		if (err){
			console.log("error is", err)
		}
		else {
			console.log("this is the user Param", userParam);
		};
		let tripIds = userParam.trips;
		Trip.find(tripIds, (err, trips) => {
			if(err){
				console.log("error", err)
			}
			else {
				console.log('got the trips!', trips)
			}
			res.json({user: userParam, trips: trips})
		});
	});
});


module.exports = router;