/**
 * New node file
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
        require('../models/user.server.model');
        require('../../../example/server/models/articles.server.model');
        /**#autoInsertRequire#*/


    return db;
};
