/**
 * New node file
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./app/core/server/config/express');
var app = express();


   app.listen(3000);
   console.log('Server running at http://localhost:3000/');
   module.exports = app;
   
