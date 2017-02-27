/**
 * New node file
 */
var users = require('../controllers/users.server.controller');

module.exports = function(app) {
	app.route('/users')
	   .post(users.create)
	   .get(users.list);
	
	app.route('/users/:userId')
       .get(users.read)
       .put(users.update)
       .delete(users.deleter);
	
	app.param('userId', users.userByID);
 
};