/**
 * 
 * */
module.exports = function(app) {
	var index = require('../controllers/index.server.controller'); 
	app.get('/', index.render);

	app.get('/admin-lte.ejs', function(req, res){
		res.render('admin-lte', 
			{ 
				title: 'AdminLTE',
				pathTheme: '/AdminLTE'
			}) 
	});
	
	app.get('/gentelella.ejs', function(req, res){
		res.render('gentelella', 
			{ 
				title: 'Gentelella',
				pathTheme: '/gentelella'
			}) 
	});
	
};

  