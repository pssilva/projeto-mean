/**
 * New node file
 * $export SESSION_SECRET=??????
 */
module.exports = {
		db: 'mongodb://localhost/project-mean',
		sessionSecret: process.env.SESSION_SECRET //'developmentSessionSecret'
};