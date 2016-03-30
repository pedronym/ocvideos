module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/css/main.css': 'public/sass/main.scss'
            }
        }
    },
    watch: {
        sass: {
        files: ['public/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true
          }
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['watch']);
}