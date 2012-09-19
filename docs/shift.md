## TheTime.js Shift Module

Shift some years from this moment. Shift only year. Return Moment **[shifted_year, month, 1]**

```javascript
M = new Moment([2012, 10, 13])
M.shift_years(2)  // Moment([2014, 10, 1])
M.shift_years(-3) // Moment([2009, 10, 1])
```

Shift some month from this moment. Shift month (and year if it need). Return Moment **[year, shifted_month, 1]**

```javascript
M = new Moment([2012, 10, 13])
M.shift_months(3)  // Moment([2013, 1, 1])
M.shift_months(-5) // Moment([2012, 5, 1])
```

Shift methods based on time shift of Unix seconds

```javascript
M = new Moment([2012, 10, 13])

M.shift_weeks(10)
M.shift_days(-1)
M.shift_hours(115)
M.shift_mins(27)
M.shift_secs(1000)
```