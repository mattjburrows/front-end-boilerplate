module.exports = function ( grunt ) {

    // Public configuration
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        sass: {
            compile: {
                options: {
                    // Boolean: Make Compass imports available and load project configuration.
                    compass: true,
                    // Boolean: include line numbers, useful for debugging styles.
                    lineNumbers: false,
                    // String: nested (default), compact, compressed, or expanded.
                    style: 'compressed'
                },
                files: {
                    'public/css/screen.css': 'public/sass/screen.scss'
                }
            }
        },
        uglify: {
            compress: {
                options: {
                    mangle: false
                },
                files: {
                    'public/js/app.min.js': [ 'public/js/app.js' ]
                }
            }
        },
        watch: {
            files: [ 'public/js/app.js', 'public/sass/screen.scss' ],
            tasks: [ 'sass:compile', 'uglify:compress' ]
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( 'default', [ 'sass:compile', 'uglify:compress' ] );

};