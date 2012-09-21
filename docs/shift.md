## TheTime.js Shift Module

Shift some years from this Time. Shift only year. Return Time **[shifted_year, month, 1]**

```javascript
M = new Time([2012, 10, 13])
M.shift_years(2)  // Time([2014, 10, 1])
M.shift_years(-3) // Time([2009, 10, 1])
```

Shift some month from this Time. Shift month (and year if it need). Return Time **[year, shifted_month, 1]**

```javascript
M = new Time([2012, 10, 13])
M.shift_months(3)  // Time([2013, 1, 1])
M.shift_months(-5) // Time([2012, 5, 1])
```

Shift methods based on time shift of Unix seconds

```javascript
M = new Time([2012, 10, 13])

M.shift_weeks(10)
M.shift_days(-1)
M.shift_hours(115)
M.shift_mins(27)
M.shift_secs(1000)
```