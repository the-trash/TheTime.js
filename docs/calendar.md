## TheTime.js Calendar Module

Мах days cells in month block (constant)

```javascript
M = new Time
M.max_days // 42
```
Shift month from current Time. Return Time for shifted **[year, month, 1]**

Duplicate from **shift** module

```javascript
M.shift_months(3)
M.shift_months(-13)
```

Checking for today (year1 is year2, month1 is month2, day1 is day2)


```javascript
// Checking with current day
M = new Time([2012, 4, 5])
Time.today(M) // true | false

// Checking for days equal
M1 = new Time([2012, 4, 5])
M2 = new Time([2012, 4, 5])
M1.today(M2) // true

M1 = new Time([2012, 4, 4])
M2 = new Time([2012, 4, 5])
M1.today(M2) // false
```

How many days in month?

```javascript
M1 = new Time([2012, 9, 18])
M1.month_length() // 30

M2 = new Time([2013, 2, 15])
M2.month_length() // 28
```

How many days in previous month?
How many days in next month?

```javascript
M = new Time
M.prev_month_length() // number
M.next_month_length() // number
```

Day of week for first day in month

```javascript
M = new Time
M.first_day_of_month() // number [1..7]
```

Day of week for last day in month

```javascript
M = new Time
M.last_day_of_month() // number [1..7]
```

Empty day's cells before days of month

```javascript
M = new Time
M.days_before_month() // number [0..6]
```

Empty day's cells after days of month

```javascript
M = new Time
M.days_after_month() // number [5..14]
```