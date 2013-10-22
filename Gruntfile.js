module.exports = function(grunt) {

    // Set the root directory.
    var ROOT_DIR = 'public/',
        // Set the SASS directory.
        SASS_DIR = 'sass/',
        // Set the CSS directory.
        CSS_DIR  = ROOT_DIR + 'css/',
        // Set the JS directory.
        JS_DIR   = ROOT_DIR + 'js/';

    // Load all Grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Public configuration.
    grunt.initConfig({
        config: {
            root: ROOT_DIR,
            sass: SASS_DIR,
            css: CSS_DIR,
            js: JS_DIR
        },
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            development: {
                options: {
                    style: 'expanded',
                    compass: 'config.rb'
                },
                src: ['<%= config.sass %>screen.scss'],
                dest: '<%= config.css %>screen.css'
            },
            production: {
                options: {
                    style: 'compressed',
                    compass: 'config.rb'
                },
                src: ['<%= config.sass %>screen.scss'],
                dest: '<%= config.css %>screen.css'
            }
        },
        uglify: {
            development: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    preserveComments: true
                },
                files: {
                    '<%= config.js %>app.min.js': ['<%= config.js %>app.js']
                }
            },
            production: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= config.js %>app.min.js': ['<%= config.js %>app.js']
                }
            }
        },
        watch: {
            // Because the scripts live in the JS folder
            // If we listen out to changes to any .js file in there
            // We will get an infinite loop...
            // So listen out to changes to individual folder only.
            scripts: {
                files: '<%= config.js %>app.js',
                tasks: ['uglify:development'],
                options: {
                    event: ['changed']
                }
            },
            // Listen out to all changes to any file in the sass folder.
            styles: {
                files: '<%= config.sass %>{,*/}*.{scss,sass}',
                tasks: ['sass:development'],
                options: {
                    event: ['changed']
                }
            }
        }
    });

    // Register the Grunt tasks.
    grunt.registerTask('default', [
        'sass:production',
        'uglify:production'
    ]);

    grunt.registerTask('development', [
        'sass:development',
        'uglify:development'
    ]);

};