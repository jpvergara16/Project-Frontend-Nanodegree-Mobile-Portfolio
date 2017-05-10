module.exports = function(grunt) {

    // Initialising
    grunt.initConfig({
        //Import package.json
        pkg: grunt.file.readJSON('package.json'),

        // Clean destination folder
        clean: {
            folders: ['dest']
        },
        //Compress images
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                        expand: true,
                        cwd: 'img',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dest/img/'
                    },
                    {
                        expand: true,
                        cwd: 'views/images',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dest/views/images/'
                    }
                ]
            }
        },
        //Minify js files
        uglify: {
            my_target: {
                files: {
                    'dest/views/js/main.js': ['views/js/main.js'],
                    'dest/js/perfmatters.js': ['js/perfmatters.js']
                }
            }
        },
        //Minify CSS files
        cssmin: {
            my_target: {
                files: {
                    'dest/css/print.css': ['css/print.css'],
                    'dest/css/style.css': ['css/style.css'],
                    'dest/views/css/bootstrap-grid.css': ['views/css/bootstrap-grid.css'],
                    'dest/views/css/style.css': ['views/css/style.css']
                }
            }
        },
        //Inline minified CSS file
        'string-replace': {
            inline: {
                files: {
                    'dest/': ['*.html', 'views/*.html'],
                },
                options: {
                    replacements: [{
                            pattern: '<!-- @import main css -->',
                            replacement: '<style> <%= grunt.file.read("dest/css/style.css") %> </style>'
                        },
                        {
                            pattern: '<!-- @import Pizza stylesheet -->',
                            replacement: '<style> <%= grunt.file.read("dest/views/css/style.css") %> </style>'
                        },
                        {
                            pattern: '<script src="js/perfmatters.js"></script>',
                            replacement: '<script> <%= grunt.file.read("dest/js/perfmatters.js") %> </script>'
                        }
                    ]
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
                    cwd: 'dest/',
                    src: ['*.html', 'views/*.html'],
                    dest: 'dest/',
                    filter: 'isFile'
                }]
            }
        }

    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Run tasks
    grunt.registerTask('default', ['clean', 'imagemin', 'uglify', 'cssmin', 'string-replace', 'htmlmin']);

};