## TheTime.js Day Ext Todule

Extension of day's functions

```javascript
T = new Time
```

Check for day's period

* night [0.00-6.00)
* morning [6.00-12.00)
* day [12.00-18.00)
* evening [18.00-0.00)

Change it if it's need

```javascript
T.is_night()   // true | false
T.is_morning() // true | false
T.is_day()     // true | false
T.is_evening() // true | false
```

Localized name of day's period

```javascript
T.part_of_day() // night | morning | day | evening
```

Check for day of week

```javascript
T.is_monday()    // true | false
T.is_tuesday()   // true | false
T.is_wednesday() // true | false
T.is_thursday()  // true | false
T.is_friday()    // true | false
T.is_saturday()  // true | false
T.is_sunday()    // true | false
```

Shortcuts

```javascript
T.is_mon() // true | false
T.is_tue() // true | false
T.is_wed() // true | false
T.is_thu() // true | false
T.is_fri() // true | false
T.is_sat() // true | false
T.is_sun() // true | false
```