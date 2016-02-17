module.exports = function(grunt) {

	var watchFiles = {
		js: [
			'gruntfile.js', 
			'app.js', 
			'public/**/*.js', 
			'routes/*.js'
		],
		css: ['public/**/*.css'],
		sass: ['public/**/*.scss'],
		views: ['views/*.hbs']
	};

  grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),

	concurrent: {
		default: ['nodemon', 'watch', 'sass'],
		options: {
			logConcurrentOutput: true,
			limit: 10
		}
	},

    // configure nodemon
    nodemon: {
      dev: {
        script: 'bin/www'
      }
    },

	sass: {
		development: {
			files: {
				'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
			}	
		}
	},

    watch: {
		options: {
			livereload: true,
		},
		js: {
			files: watchFiles.js,
			options: {
				livereload: true
			}
		},
		css: {
			files: watchFiles.css,
			//tasks: ['jshint'],
			options: {
				livereload: true
			}
		},
		sass: {
			files: watchFiles.sass,
			tasks: ['sass:development'],
			//tasks: ['jshint'],
			options: {
				livereload: true
			}
		},
		views: {
			files: watchFiles.views,
			options: {
				livereload: true
			}
		}
	}

  });
	
  require('load-grunt-tasks')(grunt);
  grunt.option('force', true);

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register the nodemon task when we run grunt
  //grunt.registerTask('default', ['concurrent:default']);
  grunt.registerTask('default', ['sass', 'concurrent:default']);
  //grunt.registerTask('default', ['nodemon']);  

};