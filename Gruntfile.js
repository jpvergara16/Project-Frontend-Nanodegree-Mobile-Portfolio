
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
    					cwd: 'src/img',
    					src: ['**/*.{png,jpg,gif}'],
    					dest: 'dest/img/'
    				},
    				{
    					expand: true,
    					cwd: 'src/views/images',
    					src: ['**/*.{png,jpg,gif}'],
    					dest: 'dest/views/images/'
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
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio/src/index.html': 'dest/index.html',
                }
            },
            pizzas: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio/src/views/pizza.html': 'dest/views/pizza.html',
                }
            }
        },
        uglify: {
            min: {
                files: grunt.file.expandMapping(['js/*.js', 'src/views/**/*.js'], '../Project-Frontend-Nanodegree-Mobile-Portfolio/', {
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
                        cwd: 'src/css',
                        src: '*.css',
                        dest: '..dest/css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'src/views/css',
                        src: '*.css',
                        dest: '../Project-Frontend-Nanodegree-Mobile-Portfolio/dest/views/css',
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