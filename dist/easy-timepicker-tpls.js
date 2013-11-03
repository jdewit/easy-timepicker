angular.module('easyTimepicker').run(['$templateCache', function($templateCache) {

  $templateCache.put('easy-timepicker.html',
    "<div class=\"dropdown easy-timepicker-container\" ng-class=\"{open: toggler}\">\n" +
    "  <div class=\"dropdown-menu\">\n" +
    "    <div class=\"hours-col\" ng-class=\"widgetColClass\">\n" +
    "      <div><a class=\"btn\" ng-click=\"incrementHours()\"><i class=\"icon-chevron-up\"></i></a></div>\n" +
    "      <div class=\"hours-val\">{{ widget.hours }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"decrementHours()\"><i class=\"icon-chevron-down\"></i></a></div>\n" +
    "    </div>\n" +
    "    <div class=\"minutes-col\" ng-class=\"widgetColClass\">\n" +
    "      <div><a class=\"btn\" ng-click=\"incrementMinutes()\"><i class=\"icon-chevron-up\"></i></a></div>\n" +
    "      <div class=\"minutes-val\">{{ widget.minutes }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"decrementMinutes()\"><i class=\"icon-chevron-down\"></i></a></div>\n" +
    "    </div>\n" +
    "    <div class=\"meridian-col\" ng-class=\"widgetColClass\" ng-show=\"showMeridian\">\n" +
    "      <div><a class=\"btn\" ng-click=\"toggleMeridian()\"><i class=\"icon-chevron-up\"></i></a></div>\n" +
    "      <div class=\"meridian-val\" ng-click=\"toggleMeridian()\">{{ widget.meridian }}</div>\n" +
    "      <div><a class=\"btn\" ng-click=\"toggleMeridian()\"><i class=\"icon-chevron-down\"></i></a></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
