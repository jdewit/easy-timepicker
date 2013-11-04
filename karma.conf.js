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
      'src/js/easy-timepicker.js',
      'dist/easy-timepicker-tpls.js',

      // tests
      'test/*Spec.js',
    ],

    autoWatch: true,
    browsers: ['Chrome']
  });
};
