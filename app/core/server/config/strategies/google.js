/**
 * New node file
 */
var passport = require('passport'),
       url = require('url'),
       GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
       config = require('../config'),
       users = require('../../controllers/users.server.controller');
   module.exports = function() {
     passport.use(new GoogleStrategy({
       clientID: config.google.clientID,
       clientSecret: config.google.clientSecret,
       callbackURL: config.google.callbackURL,
       passReqToCallback: true
     },
     function(req, accessToken, refreshToken, profile, done) {
       var providerData = profile._json;
       providerData.accessToken = accessToken;
       providerData.refreshToken = refreshToken;
       var providerUserProfile = {
         firstName: profile.name.givenName,
         lastName: profile.name.familyName,
         fullName: profile.displayName,
         email: profile.emails[0].value,
         username: profile.username,
         provider: 'google',
         providerId: profile.id,
         providerData: providerData
       };
       users.saveOAuthUserProfile(req, providerUserProfile, done);
    }));
};


