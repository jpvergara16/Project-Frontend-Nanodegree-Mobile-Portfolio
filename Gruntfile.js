module.exports = function (grunt) {

    // Initialising
    grunt.initConfig({
        //Import package.json
        pkg: grunt.file.readJSON('package.json'),
		//Compress images
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 5
				},
				files: [
				{
          expand: true,
					cwd: 'img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				},
				{
					expand: true,
					cwd: 'views/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'views/images/'
				}
				]
			}
		},
        //Minify js files
        uglify: {
            my_target: {
                files: {
					'views/js/main.js': ['views/js/main.js'],
					'js/perfmatters.js': ['js/perfmatters.js']
				}
            }
        },

        //Minify CSS files
        cssmin: {
            my_target: {
                files: {
					'css/print.css': ['css/print.css'],
					'css/style.css': ['css/style.css'],
					'views/css/bootstrap-grid.css': ['views/css/bootstrap-grid.css'],
					'views/css/style.css': ['views/css/style.css']
				}
            }
        },
        //Inline minified CSS file
		    //Reference https://github.com/eruizdechavez/grunt-string-replace
		    'string-replace': {
			  inline: {
				options: {
					replacements: [
					{
						pattern: '<!-- @import main css -->',
						replacement: '<style><%= grunt.file.read("css/style.css") %></style>'
					},
					{
						pattern: '<!-- @import Pizza stylesheet -->',
						replacement: '<style><%= grunt.file.read("views/css/style.css") %></style>'
					},
					{
						pattern: '<script src="js/perfmatters.js"></script>',
						replacement: '<script><%= grunt.file.read("js/perfmatters.js") %></script>'
					}]
				}
			}
		},
    //minify HTML
		htmlmin: {
			dest: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					src: ['*.html', 'views/*.html'],
					filter: 'isFile'
				}]
			}
		}
    });

    // Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Run tasks
    grunt.registerTask('default', ['imagemin', 'uglify', 'cssmin', 'string-replace','htmlmin']);

};