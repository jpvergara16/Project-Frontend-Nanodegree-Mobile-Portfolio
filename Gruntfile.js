
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Clean destion folder
        clean: {
          folder: ['dest']
        },
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
        htmlmin: {
            portfolio: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio/index.html': 'dest/index.html',
                }
            },
            pizzas: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../Project-Frontend-Nanodegree-Mobile-Portfolio//views/pizza.html': 'dest/views/pizza.html',
                }
            }
        },
        uglify: {
            min: {
                files: grunt.file.expandMapping(['js/*.js', '/views/**/*.js'], '../Project-Frontend-Nanodegree-Mobile-Portfolio/', {
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
                        dest: '..dest/css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'views/css',
                        src: '*.css',
                        dest: '../Project-Frontend-Nanodegree-Mobile-Portfolio/dest/views/css',
                        ext: '.css'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean','imagemin', 'htmlmin', 'uglify', 'cssmin']);

};