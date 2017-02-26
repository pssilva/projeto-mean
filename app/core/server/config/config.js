/**
 * New node file
 * Deve-se criar a variável de ambiente:
 * $export NODE_ENV=development
 */
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
