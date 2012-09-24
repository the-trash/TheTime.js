## TheTime.js Shift Todule

Shift some years from this moment. Shift only year. Return Time **[shifted_year, month, 1]**

```javascript
T = new Time([2012, 10, 13])
T.shift_years(2)  // Time([2014, 10, 1])
T.shift_years(-3) // Time([2009, 10, 1])
```

Shift some month from this moment. Shift month (and year if it need). Return Time **[year, shifted_month, 1]**

```javascript
T = new Time([2012, 10, 13])
T.shift_months(3)  // Time([2013, 1, 1])
T.shift_months(-5) // Time([2012, 5, 1])
```

Shift methods based on time shift of Unix seconds

```javascript
T = new Time([2012, 10, 13])

T.shift_weeks(10)
T.shift_days(-1)
T.shift_hours(115)
T.shift_mins(27)
T.shift_secs(1000)
```