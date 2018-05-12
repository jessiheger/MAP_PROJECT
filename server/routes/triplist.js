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
})

module.exports = router;