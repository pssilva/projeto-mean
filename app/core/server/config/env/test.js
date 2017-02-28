/**
 * New node file
 */
module.exports = {
     db: 'mongodb://localhost/mean-book-test',
	 sessionSecret: process.env.SESSION_SECRET, //'developmentSessionSecret'
     viewEngine: 'ejs',
     sessionSecret: process.env.SESSION_SECRET, //'developmentSessionSecret'
	 facebook: {
	       clientID: process.env.FACEBOOK_APP_ID, //'Application Id',
	       clientSecret: process.env.FACEBOOK_APP_SECRET, //'Application Secret',
	       callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	 },
	 twitter: {
	       clientID: process.env.TWITTER_APP_ID,//'Application Id',
	       clientSecret: process.env.TWITTER_APP_SECRET,//'Application Secret',
	       callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	 },
	 google: {
	       clientID: process.env.GOOGLE_APP_ID,//'Application Id',
	       clientSecret: process.env.GOOGLE_APP_ID,//'Application Secret',
	       callbackURL: 'http://localhost:3000/oauth/google/callback'
	 }
};