angular.module('ez.timepicker', ['ui.bootstrap'])

.constant('EzTimepickerConfig', {
  minuteStep: 15,
  showMeridian: true,
  meridians: ['AM', 'PM'],
  inputClass: 'form-control',
  inputContainerClass: 'input-group',
  clockIconClass: 'icon-time',
  widgetColClass: 'col-xs-4',
  incIconClass: 'icon-chevron-up',
  decIconClass: 'icon-chevron-down'
})

.directive('ezTimepicker', ['EzTimepickerConfig', function(EzTimepickerConfig) {
  return {
		restrict: 'EA',
    replace: true,
    transclude: 'element',
    templateUrl: 'ez-timepicker.html',
    scope: {
      time: '=ezTimepicker'
    },
    link: function(scope, element, attrs) {
      scope.minuteStep = parseInt(attrs.minuteStep, 10) || EzTimepickerConfig.minuteStep;
      scope.showMeridian = scope.$eval(attrs.showMeridian) || EzTimepickerConfig.showMeridian;
      scope.meridians = attrs.meridians || EzTimepickerConfig.meridians;
      scope.inputClass = attrs.inputClass || EzTimepickerConfig.inputClass;
      scope.inputContainerClass = attrs.inputContainerClass || EzTimepickerConfig.inputContainerClass;
      scope.clockIconClass = attrs.clockIconClass || EzTimepickerConfig.clockIconClass;
      scope.widgetColClass = attrs.widgetColClass || EzTimepickerConfig.widgetColClass;
      scope.incIconClass = attrs.incIconClass || EzTimepickerConfig.incIconClass;
      scope.decIconClass = attrs.decIconClass || EzTimepickerConfig.decIconClass;
      scope.widget = {};

      // fix automatic attribute mapping to root element
      //element.find('input.time-input').attr('id', attrs.id).attr('class', attrs.class);
      //element.removeAttr('id').attr('class', 'dropdown ez-timepicker-container');

      scope.incrementHours = function() {
        if (scope.showMeridian) {
          if (scope.widget.hours === 11) {
            scope.widget.hours++;
            scope.toggleMeridian();
          } else if (scope.widget.hours === 12) {
            scope.widget.hours = 1;
          } else {
            scope.widget.hours++;
          }
        } else {
          if (scope.widget.hours === 23) {
            scope.widget.hours = 0;
          } else {
            scope.widget.hours++;
          }
        }
      };

      scope.decrementHours = function() {
        scope.widget.hours--;
        if (scope.widget.hours === 0) {
          if (scope.showMeridian) {
            scope.widget.hours = 12;
          } else {
            scope.widget.hours = 23;
          }
        } else if (scope.widget.hours === 11 && scope.showMeridian) {
          scope.toggleMeridian();
        }
      };

      scope.incrementMinutes = function() {
        scope.widget.minutes = parseInt(scope.widget.minutes, 10) + scope.minuteStep;
        if (scope.widget.minutes >= 60) {
          scope.widget.minutes = 0;
          scope.incrementHours();
        }
        formatMinutes();
      };

      scope.decrementMinutes = function() {
        scope.widget.minutes = scope.widget.minutes - scope.minuteStep;
        if (parseInt(scope.widget.minutes, 10) < 0) {
          scope.decrementHours();
          scope.widget.minutes += 60;
        }
        formatMinutes();
      };

      scope.toggleMeridian = function() {
        scope.widget.meridian = (scope.widget.meridian === scope.meridians[0] ? scope.meridians[1] : scope.meridians[0]);
      };

      var formatMinutes = function() {
        if (parseInt(scope.widget.minutes, 10) >= 60) {
          scope.widget.minutes = 0;
          scope.incrementHours();
        }

        if (parseInt(scope.widget.minutes, 10) < 10) {
          scope.widget.minutes = '0' + parseInt(scope.widget.minutes, 10);
        }
      };

      var updateModel = function() {
        if (angular.isDefined(scope.widget.hours) && angular.isDefined(scope.widget.minutes)) {
          scope.time = scope.widget.hours + ':' + scope.widget.minutes + ' ' + scope.widget.meridian;
        } else {
          setTime(scope.time);
        }
      };

      var isScrollingUp = function(e) {
        if (e.originalEvent) {
          e = e.originalEvent;
        }
        var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
        return (e.detail || delta > 0);
      };

      var scrollHours = function(e) {
        scope.$apply(isScrollingUp(e) ? scope.incrementHours() : scope.decrementHours());
        e.preventDefault();
      };

      var scrollMinutes = function(e) {
        scope.$apply(isScrollingUp(e) ? scope.incrementMinutes() : scope.decrementMinutes());
        e.preventDefault();
      };

      var scrollMeridian = function(e) {
        scope.$apply(scope.toggleMeridian());
        e.preventDefault();
      };

      var setTime = function(time) {
        var timeArray, dTime, hours, minutes;
        if (time) {
          if (time.match(new RegExp(scope.meridians[1].substring(0,1), 'i'))) {
            scope.widget.meridian = scope.meridians[1];
          } else {
            scope.widget.meridian = scope.meridians[0];
          }

          timeArray = time.replace(/[^0-9\:]/g, '').split(':');
          hours = timeArray[0] ? timeArray[0].toString() : timeArray.toString();
          minutes = timeArray[1] ? timeArray[1].toString() : '';

          if (hours.length > 2) {
            minutes = hours.substr(2, 2);
            hours = hours.substr(0, 2);
          }
          if (minutes.length > 2) {
            minutes = minutes.substr(0, 2);
          }

          hours = parseInt(hours, 10);
          minutes = parseInt(minutes, 10);

          if (isNaN(hours)) {
            hours = 0;
          }
          if (isNaN(minutes)) {
            minutes = 0;
          }

        } else { // set current time
          dTime = new Date();
          hours = dTime.getHours();
          minutes = dTime.getMinutes();

          if (scope.showMeridian && hours >= 12) {
            scope.widget.meridian = scope.meridians[1];
          } else {
            scope.widget.meridian = scope.meridians[0];
          }
        }

        if (scope.showMeridian) {
          if (hours === 0) {
            scope.widget.hours = 12;
          } else if (hours > 12) {
            scope.widget.hours = hours - 12;
            scope.widget.meridian = scope.meridians[1];
          } else {
            scope.widget.hours = hours;
          }

        } else {
          scope.widget.hours = hours;
        }

        scope.widget.minutes = Math.ceil(minutes / scope.minuteStep) * scope.minuteStep;

        formatMinutes();

        scope.time = scope.widget.hours + ':' + scope.widget.minutes + ' ' + scope.widget.meridian;
      };

      var input = element.find('input').first();
      input.on('blur', function() {
        scope.$apply(function() {
          setTime(input.val());
        });
      });
      element.find('.hours-col').on('mousewheel wheel', scrollHours);
      element.find('.minutes-col').on('mousewheel wheel', scrollMinutes);
      element.find('.meridian-col').on('mousewheel wheel', scrollMeridian);

      scope.$watch('widget', function(val) {
        updateModel();
      }, true);
    }
  };
}]);

