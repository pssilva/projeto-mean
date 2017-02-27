/**
 * New node file
 * Deve-se criar a variável de ambiente:
 * $export NODE_ENV=development
 * $export SESSION_SECRET=??????
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'developmentSessionSecret';


var mongoose = require('./app/core/server/config/mongoose'),
	express = require('./app/core/server/config/express');
var db = mongoose();
var app = express();


   app.listen(3000);
   console.log('Server running at http://localhost:3000/');
   module.exports = app;
   
