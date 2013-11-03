EasyTimepicker Directive
========================

A timepicker directive that allows a user to select a time via a dropdown widget.

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

## Demo

http://plnkr.co/edit/uA3Ide?p=preview

