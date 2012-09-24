## TheTime.js Calendar Todule

Мах days cells in month block (constant)

```javascript
T = new Time
T.max_days // 42
```
Shift month from current moment. Return Time for shifted **[year, month, 1]**

Duplicate from **shift** module

```javascript
T.shift_months(3)
T.shift_months(-13)
```

Checking for today (year1 is year2, month1 is month2, day1 is day2)


```javascript
// Checking with current day
T = new Time([2012, 4, 5])
Time.today(T) // true | false

// Checking for days equal
T1 = new Time([2012, 4, 5])
T2 = new Time([2012, 4, 5])
T1.today(T2) // true

T1 = new Time([2012, 4, 4])
T2 = new Time([2012, 4, 5])
T1.today(T2) // false
```

How many days in month?

```javascript
T1 = new Time([2012, 9, 18])
T1.month_length() // 30

T2 = new Time([2013, 2, 15])
T2.month_length() // 28
```

How many days in previous month?
How many days in next month?

```javascript
T = new Time
T.prev_month_length() // number
T.next_month_length() // number
```

Day of week for first day in month

```javascript
T = new Time
T.first_day_of_month() // number [1..7]
```

Day of week for last day in month

```javascript
T = new Time
T.last_day_of_month() // number [1..7]
```

Empty day's cells before days of month

```javascript
T = new Time
T.days_before_month() // number [0..6]
```

Empty day's cells after days of month

```javascript
T = new Time
T.days_after_month() // number [5..14]
```