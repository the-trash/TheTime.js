## TheTime.js Day Ext Module

Extension of day's functions

```javascript
M = new Time
```

Check for day's period

* night [0.00-6.00)
* morning [6.00-12.00)
* day [12.00-18.00)
* evening [18.00-0.00)

Change it if it's need

```javascript
M.is_night()   // true | false
M.is_morning() // true | false
M.is_day()     // true | false
M.is_evening() // true | false
```

Localized name of day's period

```javascript
M.part_of_day() // night | morning | day | evening
```

Check for day of week

```javascript
M.is_monday()    // true | false
M.is_tuesday()   // true | false
M.is_wednesday() // true | false
M.is_thursday()  // true | false
M.is_friday()    // true | false
M.is_saturday()  // true | false
M.is_sunday()    // true | false
```

Shortcuts

```javascript
M.is_mon() // true | false
M.is_tue() // true | false
M.is_wed() // true | false
M.is_thu() // true | false
M.is_fri() // true | false
M.is_sat() // true | false
M.is_sun() // true | false
```