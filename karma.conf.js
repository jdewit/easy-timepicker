module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // libraries
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // our app
      'src/js/ez-timepicker.js',
      'dist/ez-timepicker-tpls.js',

      // tests
      'test/*Spec.js',
    ],

    autoWatch: true,
    browsers: ['Chrome']
  });
};
