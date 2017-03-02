/**
 * New node file
 * Deve-se criar a variável de ambiente:
 * $export NODE_ENV=development
 * $export SESSION_SECRET=??????
 * $export FACEBOOK_APP_ID=??????
 * $export FACEBOOK_APP_SECRET=??????
 * $export TWITTER_APP_ID=??????
 * $export TWITTER_APP_SECRET=??????
 * $export GOOGLE_APP_ID=??????
 * $export GOOGLE_APP_SECRET=??????
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'developmentSessionSecret';
process.env.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '??????';
process.env.FACEBOOK_SESSION_SECRET = process.env.FACEBOOK_APP_SECRET || '###$$$$';
process.env.TWITTER_APP_ID = process.env.FACEBOOK_APP_ID || '??????';
process.env.TWITTER_APP_SECRET = process.env.FACEBOOK_APP_SECRET || '###$$$$';

var mongoose = require('./app/core/server/config/mongoose'),
	express = require('./app/core/server/config/express');
	passport = require('./app/core/server/config/passport');
	
var db = mongoose();
var app = express();
var passport = passport();

console.log("FACEBOOK_APP_SECRET = " + process.env.FACEBOOK_APP_SECRET);
console.log("FACEBOOK_SESSION_SECRET = " + process.env.FACEBOOK_SESSION_SECRET);

console.log("TWITTER_APP_ID = " + process.env.TWITTER_APP_ID);
console.log("TWITTER_APP_SECRET = " + process.env.FACEBOOK_APP_SECRET);

console.log("GOOGLE_APP_ID = " + process.env.GOOGLE_APP_ID);
console.log("GOOGLE_APP_SECRET = " + process.env.GOOGLE_APP_SECRET);

   app.listen(3000);
   console.log('Server running at http://localhost:3000/');
   module.exports = app;
