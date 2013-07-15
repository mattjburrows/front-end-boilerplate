module.exports = function(grunt){

    // Public configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            compile: {
                options: {
                    style: 'compressed',
                    compass: 'config.rb',
                },
                files: {
                    'public/css/screen.css': 'public/sass/screen.scss'
                }
            }
        },
        watch: {
            build: {
                options: {
                    livereload: true
                },
                files: ['public/sass/*.scss', 'public/sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    } );

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:compile']);

};