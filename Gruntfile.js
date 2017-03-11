// [1] Wrapper function
module.exports = function(grunt) {
    var mongoose = require('./app/core/server/config/mongoose'),
        express = require('./app/core/server/config/express');

    // Load time-grunt to measure performance
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    console.log("appConfig");
    console.log(appConfig);

    // [2] Project and task configuration 
    grunt.initConfig({
        // Project settings
        yeoman: appConfig,

        pkg: grunt.file.readJSON('package.json'),
        express: {
            custom: {
              options: {
                port: 9001,
                bases: 'www-root',
                server: './server' // acessa o arquivo: server.js
              }
            }
        },
    });
    
    // [3] Load all plug-in tasks automatically 
    require('load-grunt-tasks')(grunt);
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-parallel');
    grunt.registerTask('myServer', ['express', 'express-keepalive']);

    // [4] Default task 
    grunt.registerTask('default', ['myServer']);

};