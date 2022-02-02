var logfile = require('logfile-grunt');
const sass = require('node-sass');

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
	        options: {
	            implementation: sass,
	            sourceMap: false
	        },
	        dist: {
	            files: [
					{
					expand: true,
					cwd: "scss/",
					src: ["*.scss"],
					dest: "scss",
					ext: ".css"
					}
				]
	        }
	    },
		
		autoprefixer: {
			options: {
			  browsers: ['last 4 versions', 'ie 8', 'ie 9']
			},
	      	your_target: {
		      files: [
				{
				expand: true,
				cwd: "scss/",
				src: ["*.css"],
				dest: "scss",
				}
			]
		    }
	    },

		cssmin: {
			minifycss: {
				files: [{
					expand: true,
					cwd: './scss',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css',
				}]
			}
		},

		watch: {
			scripts: {
				files: ['sass/*.sass', 'scss/*.scss'],
				tasks: ['sass', 'autoprefixer', 'minifycss'],
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
  	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.registerTask('minifycss','cssmin:minifycss');
	grunt.registerTask('default', ['imagemin']);
};

