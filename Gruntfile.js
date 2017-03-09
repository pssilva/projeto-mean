// Generated on 2017-03-02 using generator-angular 0.16.0
'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    
	    concat: {
	      options: {
	        separator: ';',
	      },
	      dist: {
	        src: ['src/fileA.js', 'src/fileB.js'],
	        dest: 'dist/built.js',
	      } 
	   }
	});
	
	// Load the plugin that provides the "concat" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', ['concat']);
	

};

