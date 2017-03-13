/**
 * New node file
 */
var uri = 'mongodb://localhost:27017/project-mean';
var options = { promiseLibrary: require('bluebird') };
var db = require('mongoose').createConnection(uri, options);
var config = require('./config'),
	express = require('express'),
	session = require('express-session'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	flash = require('connect-flash');
	//passport = require('passport');

module.exports = function() {
	var app = express();
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		 app.use(compress());
	}
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));
	
	app.set('views', './app/core/server/views');
    app.set('view engine', 'ejs');

    app.use(flash());
//    app.use(passport.initialize());
//    app.use(passport.session());
	
    require('../routers/index.server.routers')(app);
	/**#autoInsertRequire#*/


    app.use('/public',express.static('./app/core/client'));
    app.use('/AdminLTE',express.static('./app/core/client/themes/AdminLTE'));
    app.use('/gentelella',express.static('./app/core/client/themes/gentelella'));
    app.use('/lib',express.static('./app/core/client/lib'));
    app.use('/example',express.static('./app/example/client'));
	/**#autoInsertStaticPath#*/

	return app;
};

