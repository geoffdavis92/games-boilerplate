module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			dev_js: {
				files: {
					'dev/js/react.js':'node_modules/react/dist/react.js'
				} /*[{
					expand: true,
					filter: 'isFile',
					src: ['node_modules/react/dist/react.js'],
					dest: 'dev/js'
				}]*/
			}
		},
		watch: {
			jade: {
				files: ['./src/**/**/*.jade'],
				tasks: ['jade:dev']
			},
			js: {
				files: ['./src/js/*.js'],
				tasks: ['babel:dev']
			},
			sass: {
				files: ['./src/sass/**/*.sass'],
				tasks: ['sass:dev']
			}
		},
		jade: {
			dev: {
				options: {
					data: function() {
						return require('./data/locals.dev.json')
					}
				},
				files: [{
					expand: true,
					cwd: './src/jade/',
					src: ['*.jade'],
					dest: './dev/',
					ext: '.html'
				}]
			},
			build: {
				options: {
					data: function() {
						return require('./data/locals.build.json')
					}
				},
				files: [{
					expand: true,
					cwd: './src/jade/',
					src: ['*.jade'],
					dest: './public/',
					ext: '.html'
				}]
			}
		},
		eslint: {
			options: {
				configFile: 'data/eslint.dev.json'
			},
			target: ['src/js/*.js']
		},
		babel: {
			options: {
				presets: [
					'es2015',
					'react'
				]
			},
			dev: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: './src/js/',
					src: ['*.js'],
					dest: './dev/js/',
					ext: '.js'
				}]
			},
			build: {
				options: {
					sourceMap: false
				},
				files: [{
					expand: true,
					cwd: './src/js/',
					src: ['*.js'],
					dest: './src/js/',
					ext: '.js'
				}]
			}
		},
		sass: {
			dev: {
				options: {
					precision: 3,
					sourcemap: 'inline',
					style: 'expanded',
					trace: true,
					update: true
				},
				files: [{
					expand: true,
					cwd: './src/sass/',
					src: 'index.sass',
					dest: './dev/css/',
					ext: '.css'
				}]
			},
			build: {
				options: {
					precision: 3,
					sourcemap: 'none',
					style: 'compressed',
					trace: true,
					update: false
				},
				files: {
					'public/css/index.css' : 'src/sass/index.sass'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', []);
	grunt.registerTask('dev', ['copy','watch']);
	grunt.registerTask('build', ['eslint','babel:build','jade:build','sass:build'])

}