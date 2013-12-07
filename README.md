EzTimepicker Directive
========================

A timepicker directive that allows a user to select a time via a dropdown widget.

Click the buttons to increment/decrement hours & minutes or scroll with your mouse.

It's also smart enough to convert invalid input such as '1a' into '1:00 AM'

- Built with the awesome [AngularJS](http://angularjs.org/).
- Utilizes [Bootstrap 3](http://http://getbootstrap.com') styling.
- Requires [angular-ui dropdown menu](http://angular-ui.github.io/bootstrap/#/dropdownToggle')

## Install

```bash
$ bower install ez-timepicker
```

## Usage 

```html
  <div ez-timepicker="time"></div>
```

## Configuration

The following options can be set either through data attributes on the time input or by overriding the EzTimepickerConfig constant.

```js
{  
  minuteStep: 15,
  showMeridian: true,
  meridians: ['AM', 'PM'],
  inputClass: 'form-control',
  inputContainerClass: 'input-group',
  clockIconClass: 'icon-clock',
  widgetColClass: 'col-xs-4',
  incIconClass: 'icon-chevron-up',
  decIconClass: 'icon-chevron-down'
}
```

## Demo

http://plnkr.co/edit/uA3Ide?p=preview


