## TheTime.js

TheTime.js - Time&Date Framework for JS and Node.js

**It is time to fix broken clocks!**

![It is time to fix broken clocks](https://raw.github.com/the-teacher/TheTime.js/master/liquid_clock.jpg)

### First of all - LiveDemo

[CalendarScript based on TheTime.js](http://jsfiddle.net/vycFT/)

### Keywords

TheTime.js, Wrapper for JavaScript Date object, JavaScript Date and Time functions, JavaScript Date Framework

### Why?

TheTime.js makes work with JS Date object easier and more humane.

### How?

* **TheTime.js** provide wrapper-class **Time** for Date.
* Use **Time** class as an alternative of **Date** class
* Easy convert between Time and Date classes
* Set dates by an array of numbers. For example, **[2012, 3, 17, 23, 54, 23]** will become **17-03-2012 23:54:23**
* Set a date by using strings. For example **'2012-10-01 16:55'** or **'2012/10/01 16:55'** or **'2012.10.01.16.55'**
* Work with intuitive getters and setters.
* Month number use next notation ​​**(1-12, January is 1, December is 12)**.
* Day number use next notation **(1-7, Monday is 1, Sunday is 7)** [ISO 8601](http://dotat.at/tmp/ISO_8601-2004_E.pdf).
* **UNIX time in seconds**. Not in **ms**.
* Create and set localizations and easily switch between them.
* It is easy to get the localized names of the days of the week and months.
* **toLeadingZero** method to get string representation of number with leading zero
* Create and use your own components of framework to solve your tasks related with Time&Date


### Node.js

```javascript

require('/path/to/the_time/i18n_default.js');
require('/path/to/the_time/core.js');

console.log(Time.o_mori)
```

### Browser

```html
<head>
  <script src="/path/to/the_time/i18n_default.js" type="text/javascript"></script>
  <script src="/path/to/the_time/core.js" type="text/javascript"></script>
</head>
```

```javascript
console.log(Time.o_mori)
```

### Framework structure

Framework consists of a core and some components.

Framework's core  consists of the default localization file (En) and the core file.

```html
<head>
  <script src="/path/to/the_time/i18n_default.js" type="text/javascript"></script>
  <script src="/path/to/the_time/core.js" type="text/javascript"></script>
</head>
```

### Framework components


* [i18n_default.js](https://github.com/the-teacher/the_time/blob/master/TheTime.js/i18n_default.js) -- default localization file
* [i18n_ru.js](https://github.com/the-teacher/the_time/blob/master/TheTime.js/i18n_ru.js) -- russian localization file
* calendar.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/calendar.md) -- methods for easy calendars building
* shift.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/shift.md) -- date shift methods
* comparsion.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/comparsion.md) -- comparsions of dates
* day_ext.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/day_ext.md) -- additional methods to get more day information
* diff.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/diff.md) -- differencies beetween 2 dates
* begin_end.js [(doc)](https://github.com/the-teacher/the_time/blob/master/docs/begin_end.md) -- to get boundary dates

## TheTime.js Core

**Date** <=> **Time**

```javascript
D = new Date // current Time
D.to_m() => Time object
```

```javascript
M = new Time // current Time
M.date => Date object
```

Ways to difine a date

```javascript
M = new Time

M = new Time([2012, 3, 27, 23, 54, 59])

M = new Time('2012/3/27 23:54:59')

M = new Time('2012-3-27 23:54:59')

M = new Time('2012.3.27.23.54.59')

M = new Time({ 'year': 2012, 'month': 3, 'day': 27, 'hours': 23, 'mins': 54, 'secs': 59 })

```

Getters

```javascript
M = new Time([2012, 3, 27, 23, 54, 59])

M.year    => 2012
M.month   => 3
M.day     => 27
M.hours   => 23

M.mins    => 23
M.secs    => 54
M.ms      => 59

M.unix    => 1332878099
M.unix_ms => 1332878099000

M.offset   => 4 // Time offset (Moscow)

M.to_a() => [2012, 3, 27, 23, 54, 59, 0, 4]
```

Setters

```javascript
M = new Time([2012, 3, 27, 23, 54, 59])

M.setYear(2010)
M.setMonth(6)
M.setDay(15)
M.setHours(25)
M.setMins(41)
M.setSecs(56)
M.setMs(678)

M.to_a() => [2010, 6, 15, 25, 41, 56, 678, 4]

M.setUnix(1234567890)
M.to_a() => [2009, 2, 14, 3, 31, 30, 0, 4]

M.setUnixMs(1234567890678)
M.to_a() => [2009, 2, 14, 3, 31, 30, 678, 4]
```

Localized names

```javascript
M = new Time([2012, 3, 27, 23, 54, 59])

M.month_name()  => "March"
M.day_of_week() => 2
M.day_name()    => "Tuesday"
```

Base formats

```javascript
M = new Time([2012, 3, 27, 23, 54, 59])

M.to_a()    => [2012, 3, 27, 23, 54, 59]
M.to_hash() => { year: 2012, month: 3, day: 27, hours: 23, mins: 54, secs: 59, ms: 0, offset: 4 }

M.toMonthString() => "2012.3"
M.toDayString()   => "2012.3.27"
```

Helpers

```javascript
Time.toLeadingZero(3)  => "03"
Time.toLeadingZero(15) => "15"

Time.toLeadingZero(-3)  => "03"
Time.toLeadingZero(-15) => "15"

Time.toLeadingZero(-3,  true) => "-03"
Time.toLeadingZero(-15, true) => "-15"
```

Return Time instance

```javascript
M = new Time
Time.want(M) => Time

M = [2010, 6, 15, 25, 41, 56, 678, 4]
Time.want(M) => Time

M = new Date
Time.want(M) => Time
```

Localization

```javascript
M.localeName    => "en"
M.currentLocale => LocaleObject

M.addLocale(RuLocaleObject)
M.setLocale('ru')
```

### License MIT

Copyright (c) 2012 Ilya N. Zykin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.