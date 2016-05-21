module.exports = function(grunt) {

  grunt.initConfig({
    dirs: {
      templates:  'public/templates',
      sass:       'public/sass',
      css:        'public/css',
      scripts:    'public/js',
      data:       'public/data'
    },
    express: {
        dev: {
            options: {
                script: 'index.js'
            }
        }
    },
    handlebars: {
        all: {
            files: {
                '<%= dirs.scripts %>/templates.js': '<%= dirs.templates %>/**.handlebars'
            }
        }
    },
    sass: {
        options: {
            sourcemap: true,
            style: 'expanded'
        },
        dev: {
            files: {
                '<%= dirs.css %>/main.css': '<%= dirs.sass %>/main.scss'
            }
        }
    },
    watch: {
        styles: {
            files: ['<%= dirs.sass %>/**.scss'],
            tasks: ['sass'],
            spawn: false,
            options: {
                livereload: {
                    host: 'localhost',
                    port: 9000,
                }
            }
        },
        handlebars: {
            files: ['<%= dirs.templates %>/**.handlebars'],
            tasks: ['handlebars:all']
        },
        express: {
            files:   ['<%= dirs.scripts %>/**.js'],
            tasks:   ['express:dev'],
            options: {
                spawn: false
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-handlebars-compiler');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['express:dev', 'watch']);
}
