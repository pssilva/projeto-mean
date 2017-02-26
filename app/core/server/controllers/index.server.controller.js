 /**
  * 
  * 
  */
exports.render = function(req, res) {
	
	res.send('Hello ' + req.query['name']);
};