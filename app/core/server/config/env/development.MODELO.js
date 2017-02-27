/**
 * New node file
 * $export SESSION_SECRET=??????
 */
module.exports = {
		db: 'mongodb://localhost/project-mean',
		sessionSecret: process.env.SESSION_SECRET, //'developmentSessionSecret'
		facebook: {
		       clientID: process.env.FACEBOOK_APP_ID, //'Application Id',
		       clientSecret: process.env.FACEBOOK_SESSION_SECRET, //'Application Secret',
		       callbackURL: 'http://localhost:3000/oauth/facebook/callback'
		}
};