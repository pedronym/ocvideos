module.exports = function(grunt) {

  grunt.initConfig({
    dirs: {
      templates:  'public/templates',
      sass:       'public/sass',
      css:        'public/css',
      scripts:    'public/js',
      data:       'public/data'
    },
    handlebars: {
        all: {
            files: {
                '<%= dirs.scripts %>/templates.js': ['<%= dirs.templates %>/intro.handlebars', '<%= dirs.templates %>/project.handlebars', '<%= dirs.templates %>/footer.handlebars']

            }
        }
    },
    sass: {
        options: {
            sourcemap: true,
            style: 'expanded'
        },
        files: {
            '<%= dirs.css %>/main.css': '<%= dirs.sass %>/main.scss'
        }
    },
    watch: {
        sass: {
            files: ['<%= dirs.sass %>/**.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
                livereload: true
            }
        },
        handlebars: {
            files: ['<%= dirs.templates %>/**.handlebars'],
            tasks: ['handlebars:all']
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-handlebars-compiler');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['watch']);
}
