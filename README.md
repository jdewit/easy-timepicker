EasyTimepicker Directive
========================

A timepicker directive that allows a user to select a time via a dropdown widget.

Click the buttons to increment/decrement hours & minutes or scroll with your mouse.

It's also smart enough to convert invalid input such as '1a' into '1:00 AM'

Built with the awesome [AngularJS](http://angularjs.org/).
Utilizes [Bootstrap 3](http://http://getbootstrap.com') styling.

## Install

```bash
$ bower install easy-timepicker
```

## Usage 

```html
<div class="input-group">
  <input type="text" ng-model="time" ez-timepicker="showTp1" class="form-control">
  <span class="input-group-btn">
    <button ng-click="showTp1 = !showTp1" class="btn btn-default">
      <i class="icon-clock"></i>
    </button>
  </span>
</div>
```

## Configuration

The following options can be set either through data attributes on the time input or by overriding the EasyTimepickerConfig constant.

```js
{  
  minuteStep: 15,
  showMeridian: true,
  meridians: ['AM', 'PM'],
  widgetColClass: 'col-xs-4',
  incIconClass: 'icon-chevron-up',
  decIconClass: 'icon-chevron-down'
}

## Demo

http://plnkr.co/edit/uA3Ide?p=preview


