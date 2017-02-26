/**
 * 
 * */
module.exports = function(app) {

	var hasName = function(req, res, next) {
	    if (req.query['name']) {
	    	next();
	    } else {
	      res.send('What is your name?');
	    }
	};
	var sayHello = function(req, res, next) {
	     res.send('Hello ' + req.query['name']);
	};

	
	var index = require('../controllers/index.server.controller'); 
	//app.get('/', index.render);
	app.get('/', hasName, sayHello);
};

