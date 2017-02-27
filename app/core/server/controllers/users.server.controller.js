/**
 * New node file
 */
var User = require('mongoose').model('User');

console.log("ID:7 users.server.controller.js");
exports.create = function(req, res, next) {

	console.log("ID:9 users.server.controller.js");
	var user = new User(req.body);
		user.save(function(err) {
	         if (err) {
	           return next(err);
	         } else {
	           res.json(user);
	         }
		});
};

exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
      if (err) {
        return next(err);
      } else {
        res.json(users);
      } 
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
    User.findOne({
      _id: id
    }, function(err, user) {
	      if (err) {
	        return next(err);
	      } else {
	        req.user = user;
	        next();
	      } 
     });
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    	if (err) {
	     return next(err);
	    } else {
	     res.json(user);
	    } 
	});
};

exports.deleter = function(req, res, next) {
    req.user.remove(function(err) {
	    if (err) {
		 return next(err);
		} else {
		    res.json(req.user);
		} 
	})
};


