/**
 * @author: Nguyen Nhu Tuan <tuanquynh0508@gmail.com>
 * @since: 0.0.1
 * @home: http://i-designer.net
 */
module.exports = function (grunt) {

	//Registry plugin
	//Concat many file to one file
	grunt.loadNpmTasks('grunt-contrib-concat');
	//Check JS syntax
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//Compressor JS file
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//Remove file or folder
	grunt.loadNpmTasks('grunt-contrib-clean');
	//Copy file or folder
	grunt.loadNpmTasks('grunt-contrib-copy');
	//Watch task
	grunt.loadNpmTasks('grunt-contrib-watch');
	//Auto create symlink to other folder
	grunt.loadNpmTasks('grunt-contrib-symlink');
	//Run server by Grunt
	grunt.loadNpmTasks('grunt-contrib-connect');
	//Less process
	grunt.loadNpmTasks('grunt-contrib-less');
	//Convert HTML template to JS file, support AngularJS Template
	grunt.loadNpmTasks('grunt-html2js');
	//Auto replace in template
	grunt.loadNpmTasks('grunt-cache-breaker');

	//Registry Task
	//Default task
	grunt.registerTask('default', ['build'/*, 'karma:unit'*/]);
	//Build task
	grunt.registerTask('build', ['jshint', 'clean', 'html2js', 'concat', 'copy:assets', 'cachebreaker:build']);
	//Release task
	grunt.registerTask('release', ['build', /*'karma:unit', */'uglify']);

	// Print a timestamp (useful for when watching)
	grunt.registerTask('timestamp', function () {
		grunt.log.subhead(Date());
	});

	// Project configuration.
	grunt.initConfig({
		////////////////////////////////////////////////////////////////////////
		//Variables-------------------------------------------------------------
		pkg: grunt.file.readJSON('package.json'),
		docinfo: '/** \n* PROJECT <%= pkg.name %> \n* PROJECT <%= pkg.description %> \n* @version: <%= pkg.version %> \n* \n* @author: Nguyen Nhu Tuan <tuanquynh0508@gmail.com> \n* @home: http://i-designer.net \n*/',
		distdir: 'dist',
		src: {
			js: ['src/app/**/*.js', 'src/common/**/*.js'],
			jsTpl: ['<%= distdir %>/templates/**/*.js'],
			//jsTest: ['test/**/*.js'],
			html: ['src/index.html'],
			tpl: {
				app: ['src/app/**/*.tpl.html'],
				common: ['src/common/**/*.tpl.html']
			},
			assets: ['src/assets/**/*.*']
		},
		lib: {
			alljs: [
				//'vendor/jquery/dist/jquery.min.js',
				'vendor/angular/angular.min.js',
				'vendor/angular-route/angular-route.min.js',
				'vendor/angular-resource/angular-resource.min.js',
				'vendor/angular-translate/angular-translate.min.js',
				'vendor/ui-router/release/angular-ui-router.min.js'
			],
			allcss: [
				'src/assets/css/reset.css',
				'src/assets/css/style.css'
			]
		},
		//Task------------------------------------------------------------------
		clean: ['<%= distdir %>/*'],
		copy: {
			assets: {
				files: [{
						nonull: true,
						dest: '<%= distdir %>',
						src: ['img/*'/*Only copy IMG folder*//*'**'*/],
						expand: true,
						cwd: 'src/assets/'
					}, {
						dest: '<%= distdir %>',
						src: 'angular-resource.min.js.map',
						expand: true,
						cwd: 'vendor/angular-resource/'
					}]
			}
		},
		jshint: {
			files: ['GruntFile.js', '<%= src.js %>'/*, '<%= src.jsTpl %>', '<%= src.jsTest %>'*/],
			options: {
				"bitwise": true,
		    "camelcase": true,
		    "curly": true,
		    "eqeqeq": true,
		    "es3": false,
		    "forin": true,
		    "freeze": true,
		    "immed": true,
		    "indent": 4,
		    "latedef": "nofunc",
		    "newcap": true,
		    "noarg": true,
		    "noempty": true,
		    "nonbsp": true,
		    "nonew": true,
		    "plusplus": false,
		    "quotmark": "single",
		    "undef": true,
		    "unused": false,
		    "strict": false,
		    "maxparams": 10,
		    "maxdepth": 5,
		    "maxstatements": 40,
		    "maxcomplexity": 8,
		    "maxlen": 120,

		    "asi": false,
		    "boss": false,
		    "debug": false,
		    "eqnull": true,
		    "esnext": false,
		    "evil": false,
		    "expr": false,
		    "funcscope": false,
		    "globalstrict": false,
		    "iterator": false,
		    "lastsemic": false,
		    "laxbreak": false,
		    "laxcomma": false,
		    "loopfunc": true,
		    "maxerr": false,
		    "moz": false,
		    "multistr": false,
		    "notypeof": false,
		    "proto": false,
		    "scripturl": false,
		    "shadow": false,
		    "sub": true,
		    "supernew": false,
		    "validthis": false,
		    "noyield": false,

		    "browser": true,
		    "node": true,

		    "globals": {
		        "angular": false,
		        "$": false
		    }
			}
		},
		html2js: {
			app: {
				options: {
					base: 'src/app'
				},
				src: ['<%= src.tpl.app %>'],
				dest: '<%= distdir %>/templates/app.js',
				module: 'templates.app'
			},
			common: {
				options: {
					base: 'src/common'
				},
				src: ['<%= src.tpl.common %>'],
				dest: '<%= distdir %>/templates/common.js',
				module: 'templates.common'
			}
		},
		concat: {
			dist: {
				options: {
					banner: "<%= docinfo %>"
				},
				src: ['<%= src.js %>', '<%= src.jsTpl %>'],
				dest: '<%= distdir %>/<%= pkg.name %>.js'
			},
			index: {
				src: ['<%= src.html %>'],
				dest: '<%= distdir %>/index.html',
				options: {
					process: true
				}
			},
			alljs: {
				src: '<%= lib.alljs %>',
				dest: '<%= distdir %>/all.js'
			},
			allcss: {
				src: '<%= lib.allcss %>',
				dest: '<%= distdir %>/all.css'
			}
		},
		cachebreaker: {
			build: {
				options: {
					match: ['<%= pkg.name %>.js', 'all.css']
				},
				files: {
					src: ['dist/index.html']
				}
			}
		},
		uglify: {
			dist: {
				options: {
					banner: "<%= docinfo %>"
				},
				src: ['<%= src.js %>', '<%= src.jsTpl %>'],
				dest: '<%= distdir %>/<%= pkg.name %>.js'
			}
		},
		watch: {
			all: {
				files: ['<%= src.js %>', /*'<%= src.jsTest %>', */'<%= src.tpl.app %>', '<%= src.tpl.common %>',
					'<%= src.html %>', '<%= src.assets %>'
				],
				tasks: ['build', 'timestamp']
			}
		}
		/*,
		 symlink: {
		 options: {
		 overwrite: false
		 },
		 explicit: {
		 src: '<%= distdir %>',
		 dest: '../api-admin/web/<%= pkg.name %>'
		 }
		 },*/
		////////////////////////////////////////////////////////////////////////
	}); //End grunt.initConfig

};