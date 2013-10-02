module.exports = function(grunt) {

    // Catch the Port property that should be passed through when grunt watch --port="****" is run.
    var LIVE_RELOAD_PORT = grunt.option('livereload') || 35729,
    // Catch the Livereload port property that should be passed through when grunt watch --port="****" is run.
        WEB_PORT         = grunt.option('port') || 9000,
    // Set the root directory.
        ROOT_DIR         = 'public/',
    // Set the SASS directory.
        SASS_DIR         = ROOT_DIR + 'sass/',
    // Set the CSS directory.
        CSS_DIR          = ROOT_DIR + 'css/';

    // Load all Grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Public configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            compile: {
                options: {
                    style: 'compressed',
                    compass: 'config.rb'
                },
                src: [SASS_DIR + 'screen.scss'],
                dest: CSS_DIR + 'screen.css'
            }
        },
        watch: {
            buildSass: {
                files: [SASS_DIR + '{,*/}*.{scss,sass}'],
                tasks: ['compile']
            },
            watchCSS: {
                livereload: LIVE_RELOAD_PORT
                files: [CSS_DIR + '{,*/}*.css']
            }
        },
        connect: {
            options: {
                port: WEB_PORT,
                livereload: LIVE_RELOAD_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: ROOT_DIR
                }
            }
        }
    });

    // Register the Grunt tasks.
    grunt.registerTask('default', [
        'sass:'
    ]);

    grunt.registerTask('compile', [
        'watch:watchSass',
        'watch:watchCSS'
    ]);

};