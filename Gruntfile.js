
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Compress images
        imagemin: {
    			dist: {
    				options: {
    					optimizeationLevel: 5
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
        htmlmin: {
            portfolio: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio/index.html': 'index.html',
                }
            },
            pizzas: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio/views/pizza.html': 'views/pizza.html',
                }
            }
        },
        uglify: {
            min: {
                files: grunt.file.expandMapping(['js/*.js', 'views/**/*.js'], '../Project-Frontend-Nanodegree-Mobile-Portfolio/', {
                    rename: function(destBase, destPath) {
                        return destBase + destPath;
                    }
                })
            }
        },
        cssmin: {
            target: {
                files: [{
                        expand: true,
                        cwd: 'css',
                        src: '*.css',
                        dest: '../css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'views/css',
                        src: '*.css',
                        dest: '../Project-Frontend-Nanodegree-Mobile-Portfolio/views/css',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['imagemin', 'htmlmin', 'uglify', 'cssmin']);

};