'use_strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            globals: {
              jQuery: true
            },
          },
          src: {
            options: {
              node: true,
              globals: {
                it: true,
                beforeEach: true,
                expect: true,
                element: true,
                browser: true,
                module: true,
                spyOn: true,
                inject: true,
                repeater: true,
                describe: true,
                angular: true,
                jQuery: true
              }
            },
            files: {
              src: ['src/**/*.js', 'spec/**/*.js']
            },
          }
        },
        less: {
          dist: {
            options: {
              yuicompress: true
            },
            files: {
              "dist/easy-timepicker.min.css": "src/less/easy-timepicker.less"
            }
          }
        },
        ngtemplates:  {
            easyTimepicker:      {
                src:      'src/template/easy-timepicker.html',
                dest:     'dist/easy-timepicker-tpls.js',
                options:  {
                  url:    function(url) { return url.replace('src/template/', ''); }
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            dist: {
                files: {
                    'dist/easy-timepicker.min.js': [
                      'src/js/easy-timepicker.js'
                    ]
                }
            }
        },
        watch: {
            dev: {
              files: ['src/**/*'],
              tasks: ['default'],
              options: {
                livereload: 9091,
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'ngtemplates']);
};
