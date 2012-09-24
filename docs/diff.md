## TheTime.js Difference Todule

Return **diff** structure with many pre-calculated difference variables

```javascript
T1 = new Time([2010, 9, 13, 12, 53, 46])
T2 = new Time([2012, 3, 20, 23, 34, 11])

diff = T1.diff(T2)
```

Difference values

```javascript
diff.years  // -1.5
diff.months // -18
diff.weeks  // -79.20639054232804
diff.days   // -554.4447337962963
diff.hours  // -13306.673611111111
diff.mins   // -798400.4166666666
diff.secs   // -47904025
diff.ms     // -47904025000
```

Absolut values

```javascript
diff.abs.years  // 1.5
diff.abs.months // 18
diff.abs.weeks  // 79.20639054232804
diff.abs.days   // 554.4447337962963
diff.abs.hours  // 13306.673611111111
diff.abs.mins   // 798400.4166666666
diff.abs.secs   // 47904025
diff.abs.ms     // 47904025000
```

Integer part of value

```javascript
diff.int.years  // 1
diff.int.months // 18
diff.int.weeks  // 79
diff.int.days   // 554	
diff.int.hours  // 13306
diff.int.mins   // 798400
diff.int.secs   // 47904025
diff.int.ms     // 47904025000
```

Tails

```javascript
diff.tail.hours // 10
diff.tail.mins  // 40
diff.tail.secs  // 25
diff.tail.ms    // 0
```

How many months between T1.month and T2.month?

```javascript
diff.months_between // 17
```